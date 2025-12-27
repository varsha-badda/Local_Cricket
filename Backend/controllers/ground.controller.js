const Ground = require("../models/ground.model");
const Match = require("../models/match.model");

// Get all grounds with vacancy
exports.getGrounds = async (req, res) => {
  const grounds = await Ground.find();

  const matches = await Match.find({ status: "scheduled" });

  const result = grounds.map((g) => {
    const isBooked = matches.some(
      (m) => m.ground.toString() === g._id.toString()
    );

    return { ...g._doc, isBooked };
  });

  res.json(result);
};

// Add ground (manager only)
exports.addGround = async (req, res) => {
  const ground = await Ground.create(req.body);
  res.json(ground);
};

// Delete ground
exports.deleteGround = async (req, res) => {
  await Ground.findByIdAndDelete(req.params.id);
  res.json({ message: "Ground deleted" });
};
