const Team = require("../models/team.model");
const Player = require("../models/player.model");

/* =========================
   GET ALL TEAMS + PLAYER COUNT
   ========================= */
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find();

    const teamsWithCounts = await Promise.all(
      teams.map(async (team) => {
        const playerCount = await Player.countDocuments({
          team: team._id,
        });

        return {
          ...team.toObject(),
          playerCount,
        };
      })
    );

    res.json(teamsWithCounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   ADD TEAM
   ========================= */
exports.addTeam = async (req, res) => {
  try {
    const { name, score } = req.body;

    const team = await Team.create({
      name,
      score: score || 0,
    });

    res.status(201).json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* =========================
   GET TEAM BY ID (WITH PLAYERS)
   ========================= */
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    const players = await Player.find({ team: team._id });

    res.json({
      ...team.toObject(),
      players, // ✅ computed, not populated
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   UPDATE TEAM SCORE
   ========================= */
exports.updateScore = async (req, res) => {
  try {
    const { score } = req.body;

    const team = await Team.findByIdAndUpdate(
      req.params.id,
      { score },
      { new: true }
    );

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.json(team);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* =========================
   DELETE TEAM
   ========================= */
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
