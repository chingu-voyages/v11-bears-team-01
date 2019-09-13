require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const cors = require("cors");
const passport = require("passport");
const users = require("./routes/api/users");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//Database Config
mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log("ERROR connecting to database: ", err.message);
  });

//Passport config
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

//Start Server
const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
