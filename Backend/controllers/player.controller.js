const Player = require("../models/player.model");

exports.getPlayers = async (req, res) => {
  const players = await Player.find();
  res.json(players);
};

exports.getPlayerById = async (req, res) => {
  const player = await Player.findById(req.params.id);

  if (!player) {
    return res.status(404).json({ message: "Player not found" });
  }

  res.json(player);
};

exports.addPlayer = async (req, res) => {
  const player = await Player.create(req.body);
  res.json(player);
};
exports.deletePlayer = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);
  res.json({ message: "Player deleted" });
};
