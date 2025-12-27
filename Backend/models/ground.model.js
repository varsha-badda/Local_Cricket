const mongoose = require("mongoose");

const groundSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
});

module.exports = mongoose.model("Ground", groundSchema);
