// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // Function that will show the list of burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    
    // Function that will insert a burger to our database
    insertOne: function(vals, cb) {
        orm.insertOne("burgers", vals, function(res) {
            cb(res);
        });
    },

    // Function that will update our burger according to the boolean value
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller.
module.exports = burger;