const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,   // 👈 NEW
  },
});

module.exports =
  mongoose.models.Team || mongoose.model("Team", teamSchema);

