const express = require("express");
const {
  getTeams,
  getTeamById,
  addTeam,
  updateScore,
  deleteTeam,
} = require("../controllers/team.controller");

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", auth, getTeams);
router.get("/:id", auth, getTeamById);
router.post("/", auth, role("manager"), addTeam);
router.put("/:id/score", auth, role("manager"), updateScore);
router.delete("/:id", auth, role("manager"), deleteTeam);

module.exports = router;
