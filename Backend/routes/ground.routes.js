const express = require("express");
const {
  getGrounds,
  addGround,
  deleteGround,
} = require("../controllers/ground.controller");

const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

const router = express.Router();

router.get("/", auth, getGrounds);
router.post("/", auth, role("manager"), addGround);
router.delete("/:id", auth, role("manager"), deleteGround);

module.exports = router;
