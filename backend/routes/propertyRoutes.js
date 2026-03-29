const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getProperties,
  likeProperty,
  unlikeProperty,
  getFavorites
} = require("../controllers/propertyController");

// ✅ IMPORTANT: no ()
router.get("/", getProperties);

router.post("/like/:id", authMiddleware, likeProperty);
router.post("/unlike/:id", authMiddleware, unlikeProperty);
router.get("/favorites", authMiddleware, getFavorites);

module.exports = router;