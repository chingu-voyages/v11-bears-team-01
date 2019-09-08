const mongoose = require("mongoose");

// GeoSchema for rides

const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

const RideSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Ride name is required"],
    maxlength: 30
  },
  duration: {
    type: Date,
    default: Date.now
  },
  geometry: GeoSchema
});

module.exports = mongoose.model("Ride", RideSchema);
