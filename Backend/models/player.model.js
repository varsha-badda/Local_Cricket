const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["Batsman", "Bowler", "All-rounder", "Wicketkeeper","captain"],
      required: true
    },
    team: {
      type: String,
      required: true
    },
    matchesPlayed: {
      type: Number,
      default: 0
    },
    runs: {
      type: Number,
      default: 0
    },
    wickets: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Player || mongoose.model("Player", playerSchema);

