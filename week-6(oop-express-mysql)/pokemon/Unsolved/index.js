const inquirer = require("inquirer");
const Pokemon = require("./Pokemon.js");
const Trainer = require("./Trainer.js");

const trainerArray = [];

function loadChoice() {
    inquirer
        .prompt(
            [
                {
                    type: "list",
                    message: "What would you like to do?",
                    choices: ["Add a trainer", "Add a pokemon", "Check random pokemon", "Show trainers", "exit"],
                    name: "choiceAns"
                }
            ]
        )
        .then(function (response) {
            if (response.choiceAns === "Add a trainer") {
                addTrainer();
            }
            else if (response.choiceAns === "Add a pokemon") {
                addPokemon();
            }
            else if (response.choiceAns === "Check random pokemon") {
                checkPokemon();
            }
            else if (response.choiceAns === "Show trainers") {
                showTrainers();
            }
            else {
                console.log("take care");
            }
            return;
        });
}

function addTrainer() {
    inquirer
        .prompt(
            [
                {
                    type: "prompt",
                    message: "What is your trainer name?",
                    name: "trainerAns"
                }
            ]
        )
        .then(function (response) {
            trainerArray.push(new Trainer(response.trainerAns));
            loadChoice();
        });
}

function addPokemon() {
    if(trainerArray.length > 0){
        inquirer
            .prompt(
                [
                    {
                        type: "list",
                        message: "What is your trainer name?",
                        choices: trainerArray,
                        name: "trainerAns"
                    },
                    {
                        type: "prompt",
                        message: "What is your pokemon name?",
                        name: "pokemonAns"
                    },
                    {
                        type: "prompt",
                        message: "What is your pokemon's HP?",
                        name: "hpAns"
                    },
                    {
                        type: "prompt",
                        message: "What is your pokemon's attack?",
                        name: "atkAns"
                    }
                ]
            )
            .then(function (response) {
                for(let i = 0; i < trainerArray.length; i++){
                    if(trainerArray[i].name === response.trainerAns){
                        trainerArray[i].addPokemon(response.pokemonAns, response.hpAns, response.atkAns);
                        break;
                    }
                }
                loadChoice();
            });
    }
    else{
        console.log("You need a trainer before you can add pokemon");
        loadChoice();
    }
}

function checkPokemon() {
    if(trainerArray.length > 0){
        inquirer
            .prompt(
                [
                    {
                        type: "list",
                        message: "What is your trainer name?",
                        choices: trainerArray,
                        name: "trainerAns"
                    }
                ]
            )
            .then(function (response) {
                for(let i = 0; i < trainerArray.length; i++){
                    if(trainerArray[i].name === response.trainerAns){
                        if(trainerArray[i].pokemon.length > 0){
                            console.log(`random pokemon : ${trainerArray[i].randomPokemon()}`);
                            break;
                        }
                        else{
                            console.log(`${trainerArray[i].name} has no pokemon`);
                            break;
                        }
                    }
                }
                loadChoice();
            });
    }
    else{
        console.log("You need a trainer before you can select pokemon");
        loadChoice();
    }
}

function showTrainers() {
    console.log(JSON.stringify(trainerArray, null, 2));
    loadChoice();
}

loadChoice();