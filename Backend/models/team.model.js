const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
});


module.exports =
  mongoose.models.Team || mongoose.model("Team", teamSchema);

