// Acquiring our mysql connection
const mysql = require("mysql");

var connection = mysql.createConnection({
    //hostname
    host: "localhost",
    port: 3306,
    // Dependent on the users mysql information
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

// Creating conenction
connection.connect(function(err){
    if (err) {
        console.err("error connecting: "+ err.stack);
        return;
    };
    console.log("connected as id: " + connection.threadId);
});

// Exporting connection object to use in other files
module.exports = connection;