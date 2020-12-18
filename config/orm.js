// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Object that will be exported to the model
var orm = {
    selectAll: function(tableInput, cb) {
        var querystring = "SELECT * FROM " + tableInput + ";";
        
        connection.query(querystring, function(err, res) {
            if (err) {
                throw err
            }
            cb(res)
        });
    },
    insertOne: function(table, vals, cb) {
        var querystring = "INSERT INTO " + table;
        querystring += " (burger_name) "
        querystring += "VALUES (";
        querystring += printQuestionMarks(1);
        querystring += ") ";
        
        connection.query(querystring, vals, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += "devoured = true";
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function(err, result) {
        if (err) {
            throw err;
        }
        cb(result);
        });
    },
};

// Exporting object to the model
module.exports = orm;