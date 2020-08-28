var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");



//Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("GET /");
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log("hbgsObject", hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;