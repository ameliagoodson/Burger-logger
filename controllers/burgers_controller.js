//Dependencies
var express = require("express");
var burger = require("../models/burger.js") 

//Create the `router` for the app, and export the `router` at the end of your file.
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function (data) {
    res.render("index", {burgers: data});   //render the handlebars html
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"    //PUT DEVOURED HERE?
  ], [
    req.body.burger_name, req.body.devoured   //WHAT IS THIS?
  ], function(result) {
    
    res.json(result);   //????
  });
});

router.put("/api/burgers/:id", function(req, res) {  //need to update to account for 'devoured'
  var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured   //DEVOURED?
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;

