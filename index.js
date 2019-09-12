require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const keys = require("./config/keys");
const passport = require("passport");
const users = require("./routes/api/users");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//BodyParser setup
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(morgan("dev"));

//Database Config
mongoose.connect(process.env.DATABASEURL, {
	useNewUrlParser: true,
	useCreateIndex: true
}).then(() => {
	console.log('Connected to DB');
}).catch(err => {
	console.log('ERROR connecting to database: ', err.message);
});

//Passport config
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/users", users);

//Start Server

const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
