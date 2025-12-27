// models/Match.model.js
const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  teamA: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  teamB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "Scheduled",
  },
});

module.exports = mongoose.model("Match", matchSchema);
