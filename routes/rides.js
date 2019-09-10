const express = require("express");
const router = express.Router();

const { createRide } = require("../controllers/rides");

//router.post("/createRide", createRide);
router.get("/", (req,res) => {
    res.render("rides/index");
});

module.exports = router;
