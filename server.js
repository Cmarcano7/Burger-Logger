// Obtaining Express dependency
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");

// Getting our routes that our server will use
const routes = require("./controllers/burgersController.js");

// Setting port to existing or local port 3306
const PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// To serve static files such as CSS files and JavaScript files.
app.use(express.static('public'));

// Setting our default view for our webpage
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Actual use of routes set in controller
app.use(routes);

// Validating correct server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});