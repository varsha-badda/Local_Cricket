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

exports.updateScore = async (req, res) => {
  const { score } = req.body;

  const team = await Team.findByIdAndUpdate(
    req.params.id,
    { score },
    { new: true }
  );

  res.json(team);
};
