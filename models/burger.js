var orm = require("../config/orm.js");


var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    //The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },

    updateOne: function(objColVals, condition, cb){
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      })
    },

    deleteDevoured: function(condition, cb) {
      orm.deleteDevoured("burgers", condition, function(res) {
        cb(res);
      });
    }
  };

  //export the database functions for the controller (burgers_controller.js) 
  module.exports = burger; 