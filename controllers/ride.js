const Ride = require("../models/Ride");

// Get ride by id

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

//Get a single ride

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
