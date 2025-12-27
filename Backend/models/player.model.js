const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ["batsman", "bowler", "all-rounder", "wicketkeeper","captain"],
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

module.exports = mongoose.model("Player", playerSchema);
