const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamA: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  teamB: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  ground: { type: mongoose.Schema.Types.ObjectId, ref: "Ground" },
  date: String,
  time: String,
  status: {
    type: String,
    enum: ["scheduled", "completed"],
    default: "scheduled",
  },
});

module.exports =
  mongoose.models.Match || mongoose.model("Match", matchSchema);
