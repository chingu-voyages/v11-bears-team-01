require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//const morgan = require("morgan");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const flash = require("connect-flash");

//Render Routes
var indexRoutes = require("./Routes/index");

//DB Connect - connecting to a remote DB on MongoDB Atlas
//process.env.DATABASEURL
mongoose.connect(process.env.DATABASEURL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
}).then(() => {
	console.log('Connected to DB');
}).catch(err => {
	console.log('ERROR connecting to database: ', err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//app.use(morgan("dev"));
app.use(flash());
app.use("/", indexRoutes);






const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
