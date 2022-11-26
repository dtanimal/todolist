require("dotenv").config();

var express = require("express");

//Create express app
var app = express();
// establish a connection to the database
require("./setupMongo")();

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/todo", require("./routes/todo"));

module.exports = app;
