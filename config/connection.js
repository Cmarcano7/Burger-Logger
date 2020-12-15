const mysql = require("mysql");

var connection = mysql.createConnection({
    //hostname
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) {
        console.err("error connecting: "+ err.stack);
        return;
    };
    console.log("connected as id: " + connection.threadId);
});