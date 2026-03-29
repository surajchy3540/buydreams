const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/config");
const { users, properties } = require("../data/db");

// ✅ Signup
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

// ✅ Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user.id }, SECRET);

  res.status(200).json({ token });
};

// ✅ Get all properties
exports.getProperties = (req, res) => {
  res.json(properties);
};

// ❤️ Like property
exports.likeProperty = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  const propId = parseInt(req.params.id);

  if (!user.favorites.includes(propId)) {
    user.favorites.push(propId);
  }

  res.json({ msg: "Liked", favorites: user.favorites });
};

// ❌ Unlike property
exports.unlikeProperty = (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  const propId = parseInt(req.params.id);

  user.favorites = user.favorites.filter(id => id !== propId);

  res.json({ msg: "Removed", favorites: user.favorites });
};

// ⭐ Get favorites
exports.getFavorites = (req, res) => {
  const user = users.find(u => u.id === req.user.id);

  const favProps = properties.filter(p =>
    user.favorites.includes(p.id)
  );

  res.json(favProps);
};