var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

//Create all our routes and set up logic within those routes where required.
//====================================================
router.get("/api/burgers", function(req, res) {
    burger.all(function(data) {
        res.json(data);
    })
})
//====================================================
router.get("/", function(req, res) {
    console.log("GET /");
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function(req, res) {
    console.log("POST /api/burgers")
    burger.insertOne([
        "burger_name", "devoured"
    ],  [
        req.body.burger_name, req.body.devoured
    ],  function(result) {
        //Send back the id of the new burger
        console.log("result id: ", result.insertId);
        res.json({  id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("UPDATE /api/burgers/:id");
    condition = "id = " + req.params.id;
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

router.delete("/api/burgers", function(req, res) {
    var condition = "devoured = 1";

    burger.deleteDevoured(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    });
});

module.exports = router;