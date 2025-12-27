const express = require("express");
const router = express.Router();

const {
  scheduleMatch,
  getMatches,
  deleteMatch,
} = require("../controllers/match.controller");

router.post("/schedule", scheduleMatch);
router.get("/", getMatches);
router.delete("/:id", deleteMatch);

module.exports = router;
