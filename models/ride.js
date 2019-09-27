const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

// Creates a LineString Schema for the bike rides

const RideSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  title: { type: String, required: true },

  waypoints: {
    type: { type: String, default: "LineString", required: true },
    coordinates: Array
  },
  totalDistance: {
    type: Number
  },
  totalTime: {
    type: Number
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Ride", RideSchema);
