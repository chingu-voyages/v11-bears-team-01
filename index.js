require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const keys = require("./config/keys");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(morgan("dev"));

// Import routes
const rideRoutes = require("./routes/ride"),
      indexRoutes = require("./routes/index");

// Connecting to the database
mongoose
  .connect(keys.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected!..."));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));{

}
// Routes
app.use("/", indexRoutes);

app.use("/api", rideRoutes);

// Setting up the port
const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
