const Vehicle = require("./vehicle.js");

class Car extends Vehicle {
    constructor(id, numberOfWheels, sound, color, passengers) {
        super(id, numberOfWheels, sound);
        this.color = color;
        this.passengers = passengers;
    }
    checkPassengers(){
        if(this.passengers > 4){
            console.log(`${this.passengers} is too many passengers.`);
            return;
        }
        console.log(`number of passengers : ${this.passengers}`);
        return;
    }
    useHorn(){
        console.log(this.sound);
    }
}

class Boat extends Vehicle {
    constructor(id, numberOfWheels, sound, crew) {
        super(id, numberOfWheels, sound);
        this.crew = crew;
    }
    crewSoundOff(){
        for(const member of this.crew){
            console.log(`Crew member : ${member}`);
        }
        return;
    }
    useHorn(){
        console.log(this.sound);
    }
}

const car1 = new Car(15, 4, "honk", "red", 5);
car1.printInfo(); //prints wheels and id
car1.checkPassengers(); // will tell u if there are too many passengers
car1.useHorn(); // honk
const boat1 = new Boat(27, 0, "noise?", ["timmy", "john", "jacob"]);
boat1.printInfo(); // prints wheels and id
boat1.crewSoundOff(); //  crew members names appear
boat1.useHorn(); // noise?
