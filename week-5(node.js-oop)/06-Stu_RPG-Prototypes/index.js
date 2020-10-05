function RpgCharacter(name, prof, yo, str, hp){
    this.name = name;
    this.profession = prof;
    this.age = yo;
    this.strength = str;
    this.hitPoints = hp;
    this.printStats = function(){
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log(`Name : ${this.name}`);
        console.log(`Profession : ${this.profession}`);
        console.log(`Age : ${this.age}`);
        console.log(`Str : ${this.strength}`);
        console.log(`HP : ${this.hitPoints}`);
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    };
}

RpgCharacter.prototype.isAlive = function(){
    if(this.hitPoints > 0){
        console.log(`${this.name} is still breathing`);
        return true;
    }
    else{
        console.log(`${this.name} is dead as a doornail`);
        return false;
    }
};
RpgCharacter.prototype.attack = function(defender){
    console.log(`${this.name} attacks ${defender.name}`);
    const initHitPoints = defender.hitPoints;
    defender.hitPoints -= this.strength;
    console.log(`${defender.name}'s HP drops from ${initHitPoints} to ${defender.hitPoints}`);
    if(!defender.isAlive()){
        console.log(`${this.name} has gained exp`);
    }
    else{
        console.log(`${defender.name} is thinking`);
    }
};
RpgCharacter.prototype.levelUp = function(){
    console.log(`${this.name} has leveled up`);
    this.age++;
    this.strength += 5;
    this.hitPoints += 25;
    this.printStats();
};

// name, prof, yo, str, hp
const char1 = new RpgCharacter("Billy", "Botanist", 23, 150, 500);
const char2 = new RpgCharacter("Eris", "Dragoon", 30, 550, 3000);

char2.printStats();
char1.printStats();
char2.attack(char1);
char2.levelUp();
reverse ("Hello");
function reverse(str) {
    if(typeof str !== "string"){
        return ("only strings please");
    }
    else{
        let tempStr = "";
        for (let i = str.length; i > 0; i--){
            tempStr += str.charAt(i-1);
        }
        
        console.log(`new string : ${tempStr}`);
        console.log(typeof tempStr);
        return tempStr;
    }
};