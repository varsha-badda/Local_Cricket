const express = require("express");

const {
  getPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/player.controller");

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", auth, getPlayers);
router.get("/:id", auth, getPlayerById);
router.post("/", auth, role("manager"), addPlayer);
router.put("/:id", auth, role("manager"), updatePlayer);

router.delete("/:id", auth, role("manager"), deletePlayer);

module.exports = router;
