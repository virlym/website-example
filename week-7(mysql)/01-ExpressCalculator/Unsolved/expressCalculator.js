// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;


// Create express app instance.
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:numberOne/:numberTwo", function(req, res) {
  var operation = req.params.operation;
  var numberOne = parseInt(req.params.numberOne);
  var numberTwo = parseInt(req.params.numberTwo);
//   TODO parse out the variables from the request
//   Parameters are received from the URL
//   TODO make sure they're converted to integers (and not strings)
//   Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
    // Add your logic here. Pun intended.
    result = numberOne + numberTwo;
    break;
  case "+":
    // Add your logic here. Pun intended.
    result = numberOne + numberTwo;
    break;
  case "subtract":
    // Subtract logic
    result = numberOne - numberTwo;
    break;
  case "-":
    // Subtract logic
    result = numberOne - numberTwo;
    break;
  case "multiply":
    // Multiply
    result = numberOne * numberTwo;
    break;
  case "*":
    // Multiply
    result = numberOne * numberTwo;
    break;
  case "divide":
    // Divide
    result = numberOne / numberTwo;
    break;
  case "/":
    //divide
    result = numberOne / numberTwo;
    break;
  default:
    // Handle anything that isn't specified
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }
  console.log(`${numberOne} ${operation} ${numberTwo} = ${result}`);

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
