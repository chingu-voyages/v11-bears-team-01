const Ride = require("../models/Ride");

// CRUD FOR THE RIDE MODEL
// GET THE RIDE BY ID
exports.rideById = (req, res, next, id) => {
  Ride.findById(id).exec((err, ride) => {
    if (err || !ride) {
      return res.status(400).json({
        error: "Ride not found!"
      });
    }
    req.ride = ride;
    next();
  });
};

//GET A SINGLE RIDE
exports.read = (req, res) => {
  return res.json(req.ride);
};

/// CREATE A RIDE
exports.create = (req, res) => {
  console.log("req.body", req.body);
  const ride = new Ride(req.body);
  ride.save((err, ride) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json({
      ride
    });
  });
};

// INDEX GET ALL THE RIDES
exports.list = (req, res) => {
  Ride.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json(data);
  });
};

// DELETE A RIDE
exports.remove = (req, res) => {
  let ride = req.ride;
  ride.remove((err, deletedRide) => {
    if (err) {
      return res.status(400).json({
        err: err
      });
    }
    res.json({
      message: "Ride deleted successfuly"
    });
  });
};

// UPDATE A RIDE
exports.update = (req, res) => {
  const ride = req.ride;
  ride.name = req.body.name;
  ride.description = req.body.description;
  ride.geo = req.body.geo;
  ride.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.json(data);
  });
};
