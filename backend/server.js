const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = "mysecretkey";

// In-memory DB (for demo)
let users = [];
let properties = [
  { id: 1, title: "Apartment", img: "apart1.jpg" },
  { id: 2, title: "Luxury Flat", img: "apart2.jpg" },
  { id: 3, title: "Land", img: "land1.jpg" },
];

// Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ msg: "No token" });

  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ msg: "Invalid token" });
  }
};


// ✅ Signup
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  users.push({
    id: Date.now(),
    name,
    email,
    password: hashed,
    favorites: []
  });

  res.json({ msg: "User created" });
});


// ✅ Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Wrong password" });

  const token = jwt.sign({ id: user.id }, SECRET);

  res.json({ token });
});


// ✅ Get properties
app.get("/properties", (req, res) => {
  res.json(properties);
});


// ❤️ Like property
app.post("/like/:id", authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  const propId = parseInt(req.params.id);

  if (!user.favorites.includes(propId)) {
    user.favorites.push(propId);
  }

  res.json({ msg: "Liked", favorites: user.favorites });
});


// ❌ Unlike property
app.post("/unlike/:id", authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  const propId = parseInt(req.params.id);

  user.favorites = user.favorites.filter(id => id !== propId);

  res.json({ msg: "Removed", favorites: user.favorites });
});


// ⭐ Get favorites
app.get("/favorites", authMiddleware, (req, res) => {
  const user = users.find(u => u.id === req.user.id);

  const favProps = properties.filter(p =>
    user.favorites.includes(p.id)
  );

  res.json(favProps);
});

app.listen(5000, () => console.log("Server running on port 5000"));