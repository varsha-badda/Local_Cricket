const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  score: {
    type: Number,
    default: 0,   // ✅ VERY IMPORTANT
  },
});


module.exports =
  mongoose.models.Team || mongoose.model("Team", teamSchema);

