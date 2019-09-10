const express = require("express");
const router = express.Router();

const { createRide } = require("../controllers/ride");

router.get("/", (req,res) => {
	res.render("landing");
});


module.exports = router;
