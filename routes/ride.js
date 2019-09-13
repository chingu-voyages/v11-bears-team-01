const express = require("express");
const router = express.Router();

const { create, rideById, read, list } = require("../controllers/ride");

router.get("/ride/:rideId", read);
router.post("/ride/create", create);
router.get("/rides", list);

router.param("rideId", rideById);

module.exports = router;
