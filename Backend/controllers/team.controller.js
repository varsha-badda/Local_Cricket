const Team = require("../models/Team.model");

// Create team
exports.createTeam = async (req, res) => {
  try {
    const { name, captain, players } = req.body;

    const team = await Team.create({
      name,
      captain,
      players
    });

    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all teams
exports.getTeams = async (req, res) => {
  const teams = await Team.find()
    .populate("captain", "name role")
    .populate("players", "name role");

  res.json(teams);
};

// Get team by ID
exports.getTeamById = async (req, res) => {
  const team = await Team.findById(req.params.id)
    .populate("captain")
    .populate("players");

  if (!team) return res.status(404).json({ message: "Team not found" });

  res.json(team);
};
