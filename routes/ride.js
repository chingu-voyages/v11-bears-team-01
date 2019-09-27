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
const { requiredSignin, isAuth } = require("../controllers/auth");

router.get("/ride/:rideId", read);
router.post("/ride/create", requiredSignin, isAuth, create);
router.delete("/ride/:rideId/:userId", requiredSignin, isAuth, remove);
router.put("/ride/:rideId/:userId", requiredSignin, isAuth, update);
router.get("/rides", list);

router.param("rideId", rideById);

module.exports = router;
