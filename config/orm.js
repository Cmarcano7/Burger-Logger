// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for creating an array of question marks and turning it into a string, needed for preperation on future developments of app
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
};

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
};

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
    insertOne: function(table, cols, vals, cb) {
        var querystring = "INSERT INTO " + table;
        querystring += " (";
        querystring += cols.toString();
        querystring += ") ";
        querystring += "VALUES (";
        querystring += printQuestionMarks(vals.length);
        querystring += ") ";

        console.log(querystring);
        
        connection.query(queryString, vals, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
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