/*
In your working directory, create a Node application, `index.js`, that accepts a command line argument, and, each time it is run, will write the argument to file _without_ overwriting the existing text.

- takes line argument
- add argument to file
*/

var fs = require("fs");
var input = process.argv;
for (var i = 0; i < input.length - 2; i++){
    var j = i + 2;
    console.log(j);
    fs.appendFile("log.txt", input[j] + "\r\n", function(error) {
        if (error) {
            return console.log(error);
        }
        console.log(`${input[j]} was appended to file!`);
    });
}