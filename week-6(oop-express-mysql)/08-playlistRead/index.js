var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  printSongs();
  //connection.end();
});

function printPop(){
    console.log("getting pop");
    connection.query("SELECT title, artist, genre FROM songs WHERE ?", [{genre : `pop`}], function(err, res) {
        if (err) {
            throw err;
        }
        else{
            console.table(res);
            connection.end();
        }
        return;
      });
    
}
function printSongs(){
    console.log("getting all songs");
    connection.query("SELECT title, artist, genre FROM songs", function(err, res) {
        if (err) {
            throw err;
        }
        else{
            console.table(res);
            printPop();
        }
        return;
      });
    
}