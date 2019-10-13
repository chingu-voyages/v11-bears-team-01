// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Creates a LineString Schema for the bike rides

// const RideSchema = new Schema({
//   name: { type: String, required: true },
//   geo: {
//     type: { type: String, default: "LineString" },
//     coordinates: Array
//   },
//   author: {
//       id: {
//           type: mongoose.Schema.Types.ObjectId,
//           ref: "users"
//       },
//       name: String
//   },
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("Ride", RideSchema);
