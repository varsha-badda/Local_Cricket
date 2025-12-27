const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamA: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  teamB: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  ground: { type: mongoose.Schema.Types.ObjectId, ref: "Ground" },
  date: { type: String, required: true },   // YYYY-MM-DD
  time: { type: String, required: true },   // HH:MM
  status: {
    type: String,
    enum: ["scheduled", "completed"],
    default: "scheduled",
  },
});

module.exports = mongoose.model("Match", matchSchema);
