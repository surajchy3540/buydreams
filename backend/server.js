const express = require("express");
const cors = require("cors");

const app = express();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/authRoutes"));
app.use("/properties", require("./routes/propertyRoutes"));

app.listen(5000, () => console.log("Server running on port 5000"));