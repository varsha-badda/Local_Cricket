const Team = require("../models/team.model");

exports.getTeams = async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
};

exports.addTeam = async (req, res) => {
  const { name, score } = req.body;

  const team = await Team.create({
    name,
    score: score || 0,
  });

  res.json(team);
};

exports.getTeamById = async (req, res) => {
  const team = await Team.findById(req.params.id).populate("players");
  res.json(team);
};

exports.updateScore = async (req, res) => {
  const { score } = req.body;

  const team = await Team.findByIdAndUpdate(
    req.params.id,
    { score },
    { new: true }
  );

  res.json(team);
};

// ✅ THIS WAS MISSING
exports.deleteTeam = async (req, res) => {
  try {
    const { id } = req.params;

    const team = await Team.findById(id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    await team.deleteOne();

    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};