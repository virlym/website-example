const Pokemon = require("./Pokemon.js");

class Trainer {
    constructor(name) {
        this.name = name;
        this.pokemon = [];
    }

    addPokemon(name, hp, atk) {
        const partyMember = new Pokemon(name, hp, atk);
        this.pokemon.push(partyMember);
    }

    randomPokemon() {
        const randomInt = Math.floor(Math.random() * this.pokemon.length);
        return (JSON.stringify(this.pokemon[randomInt], null, 2));
    }

}

module.exports = Trainer;