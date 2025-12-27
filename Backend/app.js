const express = require("express");
const cors = require("cors");

// ✅ IMPORT ROUTES FIRST
const authRoutes = require("./routes/auth.routes");
const playerRoutes = require("./routes/player.routes");
const teamRoutes = require("./routes/team.routes");
const matchRoutes = require("./routes/match.routes");


// ✅ THEN CREATE APP
const app = express();

// ✅ MIDDLEWARES
app.use(
  cors({
    origin: "http://localhost:5173", // frontend port (vite)
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ✅ ROUTES (AFTER app IS CREATED)
app.use("/api/auth", authRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/matches", matchRoutes);


// ✅ TEST ROUTE (OPTIONAL)
app.get("/", (req, res) => {
  res.send("Cricket Backend Running");
});

module.exports = app;
