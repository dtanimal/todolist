var express = require("express");
//Create express app
var app = express();

// route definition
app.get("/", function (req, res) {
  res.send("Hello World");
});

module.exports = app;
