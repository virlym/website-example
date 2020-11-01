// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res){
    connection.query("SELECT * FROM chirps", function(err, data){
      if(err){
        return res.status(500).end();
      }
      else{
        res.json(data);
      }
    });
  });

  // Add a chirp
  app.post("/api/new", function(req, res){
    console.log(req.body);
    connection.query("INSERT INTO chirps (author, chirp, created_at) VALUES (?, ?, ?)", [req.body.author, req.body.chirp, req.body.created_at], function(err, data){
      if(err){
        return res.status(500).end();
      }
      else{
        console.log(data);
        res.json({id:data.insertId});
      }
    });
  });

};
