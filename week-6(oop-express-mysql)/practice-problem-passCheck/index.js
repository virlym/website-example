const inquirer = require("inquirer");

inquirer
    .prompt(
        [
            {
                type: "input",
                message: "What is your password?",
                name: "passAns"
            }
        ]
    )
    .then(function (response) {

        if(response.passAns.length < 8){
            console.log("false, length");
            return;
        }

        let hasLower = false;
        let hasUpper = false;
        
        for(let i = 0; i < response.passAns.length; i++){
            if((response.passAns.charCodeAt(i) >= 97) && (response.passAns.charCodeAt(i) <= 122)){
                hasLower = true;
            }
            if((response.passAns.charCodeAt(i) >= 65) && (response.passAns.charCodeAt(i) <= 90)){
                hasUpper = true;
            }
        }

        if((hasLower === true) && (hasUpper === true)){
            console.log ("true");
            return;
        }

        console.log("false, case");
        return;

    });