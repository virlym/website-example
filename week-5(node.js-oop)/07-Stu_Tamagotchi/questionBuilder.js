function questionBuilder() {
    questionArray = [
        {
            type: "list",
            message: "What would you like to do?",
            name: "petAction",
            default: "feed",
            choices: ["feed", "sleep", "play", "bark", "meow", "goOutside", "goInside", "destroyFurniture", "buyNewFurniture", "status", "end"]
        }
    ];
    return questionArray;
}

module.exports = {
    questionBuilder : questionBuilder
}