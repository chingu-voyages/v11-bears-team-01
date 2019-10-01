const rides = require("../models/rides");

//All middleware goes here
let middlewareObj = {};

middlewareObj.checkRideOwnership = function (req, res, next) {
	if(req.isAuthenticated()){
		rides.findById(req.params.id, (err, foundRide) => {
		if(err || !foundRide) {
            console.log("no ride found for " + req.params.id);                  //temp console log
			res.redirect("back");                                               //ride not found
		} else {
			if(foundRide.author.id.equals(req.user._id)) {			            //if user owns ride
				next();
			} else {                                                            //user does not have permission
                console.log("User " + req.user._id + "does not own ride");      //temp console log.
				res.redirect("back");
			}
		}
	});
	} else {
        console.log("You must be logged in");                                   //temp console log
		res.redirect("back");
	}
};


middlewareObj.isLoggedIn = function(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}
	req.session.returnTo = req.originalUrl;
	res.redirect("/login");
};

module.exports = middlewareObj;
