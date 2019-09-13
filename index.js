require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const keys = require("./config/keys");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(morgan("dev"));

// Import routes
const rideRoutes = require("./routes/ride");

// Connecting to the database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB connected!..."));

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes middleware
app.use("/api", rideRoutes);

// Setting up the port
const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
