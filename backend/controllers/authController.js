const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { users } = require("../data/db");
const { SECRET } = require("../config/config");

// Signup
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  const existing = users.find(u => u.email === email);
  if (existing) {
    return res.status(400).json({ msg: "Email already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    name,
    email,
    password: hashed,
    favorites: []
  });

  res.status(200).json({ msg: "User created" });
};

//  Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user.id }, SECRET);

  res.status(200).json({ token });
};