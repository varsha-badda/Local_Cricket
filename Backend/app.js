const express = require("express");

const authRoutes = require("./routes/auth.routes");
const playerRoutes = require("./routes/player.routes");

const app = express();

app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);

app.get("/", (req, res) => {
  res.send("Cricket Management API Running");
});

module.exports = app;
