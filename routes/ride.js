const express = require("express");
const router = express.Router();

const {
  create,
  rideById,
  read,
  list,
  remove,
  update
} = require("../controllers/ride");

router.get("/ride/:rideId", read);
router.post("/ride/create", create);
router.delete("/ride/:rideId", remove);
router.put("/ride/:rideId", update);
router.get("/rides", list);

router.param("rideId", rideById);

module.exports = router;
