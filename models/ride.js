const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creates a LineString Schema for the bike rides

const RideSchema = new Schema({
  name1: { type: String, required: true },
  name2: { type: String, required: true },
  duration: { type: Number },
  geo1: {
    type: { type: String, default: "Point" },
    coordinates: Array
  },
  geo2: {
    type: { type: String, default: "Point" },
    coordinates: Array
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ride", RideSchema);
