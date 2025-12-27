const express = require("express");
const { scheduleMatch, getMatches } = require("../controllers/match.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware"); // ✅ NOT destructured

const router = express.Router();

router.get("/", auth, getMatches);
router.post("/", auth, role("manager"), scheduleMatch);

module.exports = router;
