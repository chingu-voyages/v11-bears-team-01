const express = require("express");
const router = express.Router();

const { create } = require("../controllers/ride");

router.post("/ride/create", create);

module.exports = router;
