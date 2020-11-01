const Pokemon = require('./Pokemon');

class Trainer {
    constructor(name){
        this.name = name;
        this.pokemon = [];
    }
    getRandomPokemon(){
        return this.pokemon[Math.floor(Math.random()*this.pokemon.length)]
    }
    addPokemon(pokeName,pokeHp,pokeAtk){
        this.pokemon.push(new Pokemon(pokeName,pokeHp,pokeAtk))
    }
}

module.exports = Trainer;