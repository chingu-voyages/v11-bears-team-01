const express = require("express");
const router = express.Router();

const { createRide } = require("../controllers/rides");

router.get("/", (req,res) => {
	res.render("landing");
});

//Insert Auth routes here

module.exports = router;
