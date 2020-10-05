const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    axios
    .get(queryUrl)
    .then(function(res) {
      const repoArray = [];
      for(const repo of res.data){
        repoArray.push(repo.name);
      }
      //console.log(repoArray);
      let repoStr = "";
      for(const str of repoArray){
        repoStr = repoStr + str + "\r\n";
      }
      fs.writeFile(`${username}RepoList.txt`, repoStr, function(error) {
        if (error) {
            return console.log(error);
        }
        console.log(`Appended to file!`);
      });
    });
  });
