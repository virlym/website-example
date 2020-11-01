// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var iceCreams = [
  {name: 'vanilla', price: 10, awesomeness: 3},
  {name: 'chocolate', price: 4, awesomeness: 8},
  {name: 'banana', price: 1, awesomeness: 1},
  {name: 'greentea', price: 5, awesomeness: 7},
  {name: 'jawbreakers', price: 6, awesomeness: 2},
  { name: "pistachio", price: 11, awesomeness: 15 }
];

// Routes
app.get("/icecream/:name", function(req, res) {
  var name = req.params.name;
  var index = 0;
  for(let i = 0; i < iceCreams.length; i++){
    if(iceCreams[i].name === name){
      index = i;
    }
  }
  res.render("index", iceCreams[index]);
});

app.get("/icecreams", function(req, res) {
  res.render("all-ice-creams", {
    iceCream: iceCreams
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
