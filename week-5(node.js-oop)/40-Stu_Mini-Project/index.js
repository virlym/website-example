/*
name, location, bio, LinkedIn URL, and GitHub URL
*/

const fs = require("fs");
const inquirer = require("inquirer");
const htmlBuilder = require("./htmlBuilder.js");
const questionBuilder = require("./questionBuilder.js");

inquirer
    .prompt(questionBuilder.questionBuilder())
    .then(function (response) {

        fs.writeFile(`${response.nameAns}.html`, htmlBuilder.htmlBuilder(response), 'utf-8', function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("Success!");
            return;

        });

    });

