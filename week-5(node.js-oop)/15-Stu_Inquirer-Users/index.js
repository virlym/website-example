var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username",
      default: "User"
    },
    {
      type: "checkbox",
      choices: ["HTML", "Javascript", "C++", "Assembly"],
      message: "What languages do you know?",
      name: "languages"
    },
    {
      type: "list",
      choices: ["phone", "email", "fax"],
      message: "What is your preferred method of communication",
      name: "communication"
    }
  ])
  .then(function(response) {
    console.log(response);
    var userArray = [];
    userArray.push({"languages":response.languages, "communication":response.communication});

    fs.appendFile(`${response.username}.JSON`, JSON.stringify(userArray, null, 2), 'utf-8', function(err) {

        if (err) {
          return console.log(err);
        }
      
        console.log("Success! (languages)");
      
      });     

  });
