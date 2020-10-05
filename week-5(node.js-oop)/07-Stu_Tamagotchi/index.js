const inquirer = require("inquirer");
const questionBuilder = require("./questionBuilder.js");

function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
    this.feed = function (){
        if(this.hungry){
            console.log(`That was yummy!`);
            this.hungry = false;
            return;
        }
        else{
            console.log(`No thanks! I'm full.`);
            return;
        }
    }
    this.sleep = function (){
        if(this.sleepy){
            console.log(`Zzzzzzzz`);
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
            return;
        }
        else{
            console.log(`No way! I'm not tired.`);
            return;
        }
    }
    this.play = function (){
        if(this.bored){
            console.log(`Yay! Let's play!`);
            this.bored = false;
            this.hungry = true;
            return;
        }
        else{
            console.log(`Not right now. Later?`);
            return;
        }
    }
    this.increaseAge = function (){
        this.age++;
        console.log(`Happy Birthday to me! I am ${this.age} now!`);
        return;
    }
    this.bark = function (){
        console.log(`Woof! Woof!`);
        return;
    }
    this.goOutside = function (){
        if(!this.outside){
            console.log(`Yay! I love the outdoors!`);
            this.outside = true;
            return;
        }
        else{
            console.log(`We're already outside though...`);
            return;
        }
    }
    this.goInside = function (){
        if(this.outside){
            console.log(`Do we have to? Fine...`);
            this.outside = false;
            return;
        }
        else{
            console.log(`I'm already inside...`);
            return;
        }
    }
    this.meow = function (){
        console.log(`Meow! Meow!`);
        return;
    }
    this.destroyFurniture = function (){
        if(this.houseCondition === 0){
            console.log(`No more furniture to destroy`);
            return;
        }
        else{
            this.houseCondition -= 10;
            console.log(`MUAHAHAHAHA! TAKE THAT FURNITURE!`);
            this.bored = false;
            this.sleepy = true;
            return;
        }
    }
    this.buyNewFurniture = function (){
        this.houseCondition += 50;
        console.log(`Are you sure about that?`);
    }
}

const dog = new DigitalPal();
const cat = new DigitalPal();

cat.destroyFurniture();

function init(){

    const pet = new DigitalPal();
    userLoop(pet);

}

function userLoop(pet){

    inquirer
    .prompt(questionBuilder.questionBuilder())
    .then(function (response) {
        //"feed", "sleep", "play", "bark", "meow", "goOutside", "goInside", "destroyFurniture", "buyNewFurniture"
        if(response.petAction === "feed"){
            pet.feed();
            userLoop(pet);
        }
        else if(response.petAction === "play"){
            pet.play();
            userLoop(pet);
        }
        else if(response.petAction === "sleep"){
            pet.sleep();
            userLoop(pet);
        }
        else if(response.petAction === "bark"){
            pet.bark();
            userLoop(pet);
        }
        else if(response.petAction === "meow"){
            pet.meow();
            userLoop(pet);
        }
        else if(response.petAction === "goOutside"){
            pet.goOutside();
            userLoop(pet);
        }
        else if(response.petAction === "goInside"){
            pet.goInside();
            userLoop(pet);
        }
        else if(response.petAction === "destroyFurniture"){
            pet.destroyFurniture();
            userLoop(pet);
        }
        else if(response.petAction === "buyNewFurniture"){
            pet.buyNewFurniture();
            userLoop(pet);
        }
        else if(response.petAction === "status"){
            showStats(pet);
            userLoop(pet);
        }
        else{
            return;
        }
        
    });
    return;
}

function showStats(pet){
    console.log(`hungry : ${pet.hungry}`);
    console.log(`sleepy : ${pet.sleepy}`);
    console.log(`bored : ${pet.bored}`);
    console.log(`age : ${pet.age}`);
    console.log(`outside : ${pet.outside}`);
    console.log(`house condition : ${pet.houseCondition}`);
}

init();