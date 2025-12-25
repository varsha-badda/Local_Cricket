const express = require("express");
const router = express.Router();
const {
  getAllPlayers,
  createPlayer
} = require("../controllers/player.controller");

/* VIEW players */
router.get("/", getAllPlayers);

/* ADD player */
router.post("/", createPlayer);

module.exports = router;
