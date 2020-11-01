// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var allCharacters = sequelize.define("allcharacter", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
}, {
    timestamps: false
});

// Syncs with DB
allCharacters.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = allCharacters;