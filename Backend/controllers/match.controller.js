const Match = require("../models/Match.model");

// POST /api/matches/schedule
const scheduleMatch = async (req, res) => {
  try {
    const { teamA, teamB, date } = req.body;

    const match = await Match.create({
      teamA,
      teamB,
      date,
    });

    res.status(201).json(match);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to schedule match" });
  }
};

// GET /api/matches
const getMatches = async (req, res) => {
  try {
    const matches = await Match.find()
      .populate("teamA", "name")
      .populate("teamB", "name");

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch matches" });
  }

};

// DELETE /api/matches/:id
const deleteMatch = async (req, res) => {
  try {
    const { id } = req.params;

    await Match.findByIdAndDelete(id);

    res.json({ message: "Match deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete match" });
  }
};


module.exports = {
  scheduleMatch,
  getMatches,
  deleteMatch,
};

