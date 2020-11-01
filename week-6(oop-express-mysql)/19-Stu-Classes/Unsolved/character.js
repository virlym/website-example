class Character {
  // method which prints all of the stats for a character
  constructor(name, str, hp){
    if(!name){
      throw new Error("You are missing a name");
    }
    if(!str){
      throw new Error("You are missing strength");
    }
    if(!hp){
      throw new Error("You are missing hit points");
    }
    this.name = name;
    this.strength = str;
    this.hitPoints = hp;
  }

  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if(this.hitPoints <= 0){
      return false;
    }
    return true;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    console.log(`${this.name} attacks ${opponent.name} for ${this.strength} damage`);
    // Then, change the opponent's hitPoints to reflect this
    const startHp = opponent.hitPoints;
    opponent.hitPoints = opponent.hitPoints - this.strength;
    console.log(`${opponent.name}'s HP dropped from ${startHp} to ${opponent.hitPoints}`);
  }
}

// Create two unique characters using the "character" class
// const eris = new Character("Eris", 570, 5200);
// const averill = new Character("Averill", 400, 4000);
// // Create an interval that alternates attacks every 2000 milliseconds
// let counter = 3;
// do{
  
//     if(counter % 2 === 0){
//       eris.attack(averill);
//     }
//     else{
//       averill.attack(eris);
//     }
//     console.log("~~~~~ attack over ~~~~~~~");
//     counter++;

//     const until = new Date().getTime() + 2000; while(new Date().getTime() < until){};

// }while((eris.isAlive) && (averill.isAlive));

// if(eris.isAlive){
//   console.log("Eris has won");
// }
// else{
//   console.log("Averill has won");
// }

const bob = new Character("bob", 570, 5200);
const charley = new Character("charley", 400, 4000);
let bobTurn = true;

const turnInterval = setInterval(() =>
{
  bobTurn = !bobTurn;
  if(!bob.isAlive() || !charley.isAlive()){
    clearInterval(turnInterval);
    console.log("Game");
  }
  else if(bobTurn){
    bob.attack(charley);
    charley.printStats();
  }
  else{
    charley.attack(bob);
    bob.printStats();
  }
}, 2000);