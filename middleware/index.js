const passport = require("passport");

//All middleware goes here
let middlewareObj = {};

middlewareObj.isLoggedIn = passport.authenticate("jwt", { session: false });

module.exports = middlewareObj;
