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
exports.updatePlayer = async (req, res) => {
  try {
    const { name, role, team } = req.body;

    const player = await Player.findByIdAndUpdate(
      req.params.id,
      { name, role, team },
      { new: true, runValidators: true }
    );

    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePlayer = async (req, res) => {
  await Player.findByIdAndDelete(req.params.id);
  res.json({ message: "Player deleted" });
};
