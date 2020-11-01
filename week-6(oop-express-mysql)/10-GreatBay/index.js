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
  database: "greatbay_db"
});


connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  populateBidders();
  //connection.end();
});

function printBidders(){
    console.log("getting all bidders");
    connection.query("SELECT * FROM bidder", function(err, res) {
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

function populateBidders(){
  connection.query("SELECT * FROM bidder", function(err, res) {
    if (err) {
        throw err;
    }
    else{
        const bidderArray = res;
        console.table(bidderArray);
        populateAuctions(bidderArray);
    }
    return;
  });
}

function populateAuctions(bidderArray){
  connection.query("SELECT * FROM auction", function(err, res) {
    if (err) {
        throw err;
    }
    else{
        const auctionArray = res;
        console.table(auctionArray);
        promptUser(bidderArray, auctionArray);
    }
    return;
  });
}

function quitConnection(){
  connection.end();
}

function promptUser(bidderArray, auctionArray){
  const auctionNames = [];
  for(let i = 0; i < auctionArray.length; i++){
    auctionNames.push({
      name : auctionArray[i].auction_name,
      value : auctionArray[i].id
    });
  }

  inquirer.prompt([
      {
      name:"choice",
      message:"What would like to do?",
      type:"list",
      choices:["Post an Item", "Bid on an item", "Quit"]
  },
  {
      name:'auctionItem',
      message:"What item would you like to bid on?",
      type:"list",
      choices:[...auctionNames],
      when:function(answers){
          if(answers.choice==="Bid on an item"){
              return true
          } else {
              return false
          }
      }
  },
  {
      name:'bidAmount',
      message:"How much would you like to bid?",
      type:"number",
      when:function(answers){
          if(answers.choice==="Bid on an item"){
              return true
          } else {
              return false
          }
      }
  },
  {
      name:'auctionCat',
      message:"What category is your item in?",
      type:"list",
      choices: ["item", "task", "job", "project"],
      when:function(answers){
          if(answers.choice==="Post an Item"){
              return true
          } else {
              return false
          }
      }
  },
  {
      name:'auctionName',
      message:"What is the name of the item?",
      type:"prompt",
      when:function(answers){
          if(answers.choice==="Post an Item"){
              return true
          } else {
              return false
          }
      }
  }
]).then(function(answers){
      if(answers.choice==="Post an Item"){
        postItem(answers.auctionCat, answers.auctionName, bidderArray, auctionArray);
      }
      else if(answers.choice==="Bid on an item"){
        bidItem(answers.auctionItem, auctionArray, answers.bidAmount, bidderArray)
      }
      else if(answers.choice==="Quit"){
          quitConnection();
      }
  })
}

function bidItem(auction_id, auctionArray, user_bid, bidderArray){
  if((parseInt(auctionArray[auction_id - 1].highest_bid) < user_bid) || (auctionArray[auction_id - 1].highest_bid === null )){
    connection.query(`UPDATE auction SET ? WHERE ?`, [{highest_bid : user_bid}, {id : auction_id}], function(err, res) {
      if (err) {
          throw err;
      }
      else{
        console.table(res);
        promptUser(bidderArray, auctionArray);
      }
    });
  }
  else{
    console.log("your bid is too low");
    promptUser(bidderArray, auctionArray);
  }
  return;
}

function postItem(category, name, bidderArray, auctionArray){
  console.log(category);
  console.log(name);
  if(name !== ""){
    connection.query(`INSERT INTO auction SET ?`, [{auction_category : category, auction_name : name}], function(err, res) {
      if (err) {
          throw err;
      }
      else{
        console.table(res);
        promptUser(bidderArray, auctionArray);
      }
    });
  }
  else{
    console.log("your bid is too low");
    promptUser(bidderArray, auctionArray);
  }
  return;
}