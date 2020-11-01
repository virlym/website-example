const Trainer = require("./lib/Trainer");
const inquirer = require("inquirer");
const trainers = [];

function playGame() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What do you wanna do?",
        choices: ["Create a trainer", "Catch a pokemon", "Random pokemon", "Quit"]
    }).then(function ({ choice }) {
        switch (choice) {
            case "Create a trainer":
                createTrainer();
                break;

            case "Catch a pokemon":
                catchPokemon();
                break;

            case "Random pokemon":
                findRandomPokemon();
                break;

            default:
                console.log("thanks for playing!")
                break;
        }
    })
}

function createTrainer() {
    console.log('trainer function');
    inquirer.prompt({
        type: "input",
        message: 'what is your name',
        name: "trainerName"
    }).then(function ({ trainerName }) {
        const myTrainer = new Trainer(trainerName);
        trainers.push(myTrainer);
        console.log(trainers);
        playGame();
    })
}

function catchPokemon() {
    if (!trainers.length) {
        console.log('create a trainer first!')
        playGame()
    }
    else {
        const namesOfTrainers = trainers.map(function (trainer) {
            return trainer.name
        })
        inquirer.prompt([
            {
                type: "list",
                message: "which trainer?",
                choices: namesOfTrainers,
                name: "trainerChoice"
            }, {
                type: "input",
                message: "Pokemon name",
                name: "pokemonName"
            }, {
                type: "number",
                message: "Pokemon hp",
                name: "pokemonHp"
            }, {
                type: "number",
                message: "Pokemon atk",
                name: "pokemonAtk"
            }
        ]).then(function (answers) {
            let selectedTrainer;
            for (let i = 0; i < trainers.length; i++) {
                if (trainers[i].name === answers.trainerChoice) {
                    selectedTrainer = trainers[i]
                }
            }
            selectedTrainer.addPokemon(answers.pokemonName, answers.pokemonHp, answers.pokemonAtk);
            console.log(`${selectedTrainer.name} caught a pokemon!`)
            console.log(selectedTrainer);
            playGame();
        })
    }
}

function findRandomPokemon() {
    if (!trainers.length) {
        console.log('create a trainer first!')
        playGame()
    } else {
        const namesOfTrainers = trainers.map(function (trainer) {
            return trainer.name
        })
        inquirer.prompt({
            type:'list',
            choices:namesOfTrainers,
            message:"from whose collection?",
            name:"trainerChoice"
        }).then(function({trainerChoice}){
            let selectedTrainer;
            for (let i = 0; i < trainers.length; i++) {
                if (trainers[i].name === trainerChoice) {
                    selectedTrainer = trainers[i]
                }
            }
            if(!selectedTrainer.pokemon.length){
                console.log("he has no pokemon!")
                
            } else {
                console.log(selectedTrainer.getRandomPokemon())
            }
            playGame();
        })
    }
}

playGame();

