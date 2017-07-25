var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
  burger.create("name", req.body.name, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

router.merge("/:id", function(req, res) {
  var selectedId = req.params.id;

  burger.merge(selectedId, function() {
    res.redirect("/");
  })
});

// Export routes for server.js to use.
module.exports = router;

