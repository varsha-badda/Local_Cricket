const Match = require("../models/Match.model");

exports.scheduleMatch = async (req, res) => {
  const { teamA, teamB, ground, date, time } = req.body;

  // 🚨 Check ground vacancy
  const existingMatch = await Match.findOne({
    ground,
    date,
    time,
  });

  if (existingMatch) {
    return res
      .status(400)
      .json({ message: "Ground not available at this time" });
  }

  const match = await Match.create({
    teamA,
    teamB,
    ground,
    date,
    time,
  });

  res.json(match);
};

exports.getMatches = async (req, res) => {
  const matches = await Match.find()
    .populate("teamA teamB ground");
  res.json(matches);
};
