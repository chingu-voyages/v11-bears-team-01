const Ride = require("../models/rides");

exports.createRide = (req, res) => {
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
