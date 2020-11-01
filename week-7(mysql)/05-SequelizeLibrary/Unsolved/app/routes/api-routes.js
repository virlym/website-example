// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Book = require("../models/book.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Add sequelize code to get all books and return them as JSON
  app.get("/api/all", function(req, res) {
    Book.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });  
  });

  // Add sequelize code to get a specific book and return it as JSON
  app.get("/api/:book", function(req, res) {
    console.log(`get book `);
    console.log(req.params);
    Book.findOne({ where: { title: req.params.book } }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add sequelize code to get all books of a specific genre and return them as JSON
  app.get("/api/genre/:genre", function(req, res) {
    console.log(`get genre `);
    console.log(req.params);
    Book.findOne({ where: { title: req.params.author } }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add sequelize code to get all books from a specific author and return them as JSON
  app.get("/api/author/:author", function(req, res) {
    console.log(`get author`);
    console.log(req.params);
    Book.findOne({ where: { title: req.params.genre } }).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add sequelize code to get all "long" books (more than 150 pages) and return them as JSON
  app.get("/api/books/long", function(req, res) {
    console.log(`get long`);
    console.log(req.params);
    const { Op } = require("sequelize");
    Book.findAll({ where: {pages : {[Op.gt] : 150}}}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add sequelize code to get all "short" books (150 pages or less) and return them as JSON
  app.get("/api/books/short", function(req, res) {
    console.log(`get short`);
    console.log(req.params);
    Book.findAll({ where: {pages:{$lte:150}}}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // Add sequelize code to create a book
  app.post("/api/new", function(req, res) {
    console.log("Book Data:");
    console.log(req.body);

    // Take the request...
    var book = req.body;

    // Then send it to the ORM to "save" into the DB.
    Book.create({
      title: book.title,
      author: book.author,
      genre: book.genre,
      pages: book.pages
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });

  // Add sequelize code to delete a book
  app.delete("/api/book/:id", function(req, res) {
    console.log(`delete`);
    console.log(req.params);
    Book.destroy({where: {id: req.params.id}}).then(function(data){
      res.status(200).end();
    });

  });

};
