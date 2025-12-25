const Player = require("../models/player.model");

/* ===== GET ALL PLAYERS ===== */
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find(); // DB call
    res.json(players);                   // send data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ===== CREATE PLAYER ===== */
exports.createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body); // save to DB
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
