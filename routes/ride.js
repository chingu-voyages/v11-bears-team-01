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

const { userById } = require("../controllers/User");

router.get("/ride/:rideId", read);
router.post("/ride/create/:userId", create);
router.delete("/ride/:rideId/:userId", remove);
router.put("/ride/:rideId/:userId", update);
router.get("/rides", list);

router.param("rideId", rideById);
router.param("userId", userById);
module.exports = router;
