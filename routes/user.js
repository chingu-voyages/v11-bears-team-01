const express = require("express");
const router = express.Router();

const { userById, read, update } = require("../controllers/user");

const { requiredSignin, isAuth } = require("../controllers/auth");

router.get("/user/:userId", requiredSignin, isAuth, read);
router.put("/user/:userId", requiredSignin, isAuth, update);

router.param("userId", userById);

module.exports = router;
