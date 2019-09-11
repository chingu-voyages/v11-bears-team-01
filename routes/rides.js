const express = require("express");
const router = express.Router();

const { createRide } = require("../controllers/rides");


//router.post("/createRide", createRide);


//RESTful routes

//INDEX route - get rides from database to show all rides (we do not care about user, we essentially want a feed of all rides) (Get request)
//test index route code
router.get("/", (req,res) => {
    res.render("rides/index");
});

//NEW - show form to create new Campground
router.get("/new", (req,res) => {
	res.render("rides/new");
});

//CREATE route - Add ride to database (Post request)

//SHOW - shows more info on ride (get request on /:id)
//test show route code:
router.get("/TEST", (req,res) => {
    res.render("rides/show");
});

//EDIT - Edit ride on /:id/edit (Get request)

//UPDATE - Update ride on /:id (put request)

//DESTROY - Delete ride (Delete request)


module.exports = router;
