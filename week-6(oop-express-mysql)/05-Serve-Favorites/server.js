var http = require("http");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});

// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url.toLowerCase();

  // Depending on the URL, display a different HTML file.
  switch (path) {

  case "/":
    return displayRoot(res);

    case "/favoritefoods" :
    return displayFoods(res);

  case "/favoritemovies" :
    return displayMovies(res);

    case "/favoritecssframeworks" :
    return displayCssFrameworks(res);

  default:
    return display404(res);
  }
}

// When someone visits the "http://localhost:8080/" path, this function is run.
function displayRoot(res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/home.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/favoritefoods" path, this function is run.
function displayFoods(res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/favoriteFoods.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// When someone visits the "http://localhost:8080/favoritemovies" path, this function is run.
function displayMovies(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favoriteMovies.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }
  
// When someone visits the "http://localhost:8080/favoritecssframeworks" path, this function is run.
function displayCssFrameworks(res) {
    // Here we use the fs package to read our index.html file
    fs.readFile(__dirname + "/favoriteCssFrameworks.html", function(err, data) {
      if (err) throw err;
      // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
      // an html file.
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

// When someone visits any path that is not specifically defined, this function is run.
function display404(res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/e404.html", function(err, data) {
    if (err) throw err;
    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
