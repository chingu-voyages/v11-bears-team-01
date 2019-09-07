require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const keys = require("./config/keys");
const app = express();

app.use(morgan("dev"));

const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
