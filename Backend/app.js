const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const playerRoutes = require("./routes/player.routes");

const app = express();

// ✅ THIS LINE WAS MISSING (MOST IMPORTANT)
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

module.exports = app;
