//Import MySQL connections.
var connection = require("../config/connection.js");

// selectAll();

// insertOne();

// updateOne();
// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    // create: function(table, cols, vals, cb) {
    //   var queryString = "INSERT INTO " + table;
  
    //   queryString += " (";
    //   queryString += cols.toString();
    //   queryString += ") ";
    //   queryString += "VALUES (";
    //   queryString += printQuestionMarks(vals.length);
    //   queryString += ") ";
  
    //   console.log(queryString);
  
    //   connection.query(queryString, vals, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // },
    // // An example of objColVals would be {name: panther, sleepy: true}
    // update: function(table, objColVals, condition, cb) {
    //   var queryString = "UPDATE " + table;
  
    //   queryString += " SET ";
    //   queryString += objToSql(objColVals);
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   console.log(queryString);
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // },
    // delete: function(table, condition, cb) {
    //   var queryString = "DELETE FROM " + table;
    //   queryString += " WHERE ";
    //   queryString += condition;
  
    //   connection.query(queryString, function(err, result) {
    //     if (err) {
    //       throw err;
    //     }
  
    //     cb(result);
    //   });
    // }
  };

//export the orm object for the model
module.exports = orm;

