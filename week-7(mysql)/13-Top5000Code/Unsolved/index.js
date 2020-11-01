var mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "top_songsDB"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  chartQuestion();
});

function chartQuestion(){
    inquirer.prompt([
        {
        name:"choice",
        message:"What would like to do?",
        type:"list",
        choices:["Search by artist", "Search song title", "Display multi-hit artists", "Search by chart position", "Quit"]
    },
    {
        name:'artistAns',
        message:"What artist would you like to look up?",
        type:"prompt",
        when:function(answers){
            if(answers.choice==="Search by artist"){
                return true
            } else {
                return false
            }
        }
    },
    {
        name:'titleAns',
        message:"What title would you like to look up?",
        type:"prompt",
        when:function(answers){
            if(answers.choice==="Search song title"){
                return true
            } else {
                return false
            }
        }
    },
    {
        name:'topAns',
        message:"What is the top chart number you want?",
        type:"number",
        when:function(answers){
            if(answers.choice==="Search by chart position"){
                return true
            } else {
                return false
            }
        }
    },
    {
        name:'lowAns',
        message:"What is the low chart number you want?",
        type:"number",
        when:function(answers){
            if(answers.choice==="Search by chart position"){
                return true
            } else {
                return false
            }
        }
    }
  ]).then(function(answers){
        if(answers.choice==="Search by artist"){
            findArtist(answers.artistAns);
        }
        else if(answers.choice==="Search song title"){
            findSong(answers.titleAns);
        }
        else if(answers.choice === "Search by chart position"){
            findByPosition(answers.topAns, answers.lowAns);
        }
        else if(answers.choice === "Display multi-hit artists"){
            findRepeats();
        }
        else if(answers.choice==="Quit"){
            quitConnection();
        }
    });
}

function findSong(songTitle){
    connection.query(`SELECT * FROM top5000 WHERE title = "${songTitle}"`, function(err, res) {
        if (err) {
            throw err;
        }
        else{
            const songSelect = res;
            console.table(songSelect);
            chartQuestion();
        }
        return;
      });
}

function findArtist(artistName){
    connection.query(`SELECT * FROM top5000 WHERE artist = "${artistName}"`, function(err, res) {
        if (err) {
            throw err;
        }
        else{
            const artistSelect = res;
            console.table(artistSelect);
            chartQuestion();
        }
        return;
      });
}

function findByPosition(topValue, lowValue){
    if(lowValue < topValue){
        console.log("your numbers are backwards");
        chartQuestion();
        return;
    }
    else{
        connection.query(`SELECT * FROM top5000 WHERE position >= ${topValue} AND position <= ${lowValue} ORDER BY position ASC`, function(err, res) {
            if (err) {
                throw err;
            }
            else{
                const chartSelect = res;
                console.table(chartSelect);
                chartQuestion();
            }
            return;
        });
    }
}

function findRepeats(){
    connection.query("SELECT artist FROM top5000 WHERE artist IN (SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(*)>1)", function(err, res) {
        if (err) {
            throw err;
        }
        else{
            const repeats = res;
            console.table(repeats);
            chartQuestion();
        }
        return;
      });
}

function quitConnection(){
    connection.end();
    return;
}