var express = require("express");

var app = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

app.get("/", function(req, res) {
    burger.allEaten(function(data) {
      var hbsObject = {
        eatenBurgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

// Export routes for server.js to use.
module.exports = app;
