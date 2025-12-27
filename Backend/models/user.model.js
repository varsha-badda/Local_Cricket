const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "", // ✅ optional
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["viewer", "manager"],
    default: "viewer",
  },
});

module.exports =
  mongoose.models.User || mongoose.model("User", userSchema);
