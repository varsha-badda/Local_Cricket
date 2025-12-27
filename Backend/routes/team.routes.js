const express = require("express");
const {
  getTeams,
  addTeam,
  updateScore,
} = require("../controllers/team.controller");

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", auth, getTeams);
router.post("/", auth, role("manager"), addTeam);

// 👇 NEW (manager only)
router.put("/:id/score", auth, role("manager"), updateScore);

module.exports = router;
