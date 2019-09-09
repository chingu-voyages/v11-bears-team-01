const express = require("express");
const router = express.Router();

const { createRide } = require("../controllers/ride");

router.post("/createRide", createRide);

module.exports = router;
