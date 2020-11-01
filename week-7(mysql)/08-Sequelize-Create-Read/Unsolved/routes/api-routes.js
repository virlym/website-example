// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
//console.log(db);
// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Todo.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/api/todos", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    console.log(req.body);
    db.Todo.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    }).catch(function (err) {
      if(err.message === "Validation error: needs to be at least 1 character"){
        console.log(err.message);
        res.status(500).json(err);
      }
      else{
        res.status(500).json(err);
      }
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.Todo.destroy({where: {id: req.params.id}}).then(function(data){
      res.status(200).end();
    }).catch(function(err){
      res.status(500).json(err);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/todos", function(req, res) {
    console.log(req.body);
    db.Todo.update({text: req.body.text, complete: req.body.complete}, {where: {id : req.body.id}}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    }).catch(function(err){
      res.status(500).json(err);
    });
  });
};
