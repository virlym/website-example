function questionBuilder() {
    questionArray = [
        {
            type: "input",
            message: "What is your name?",
            name: "nameAns",
            default: "User"
        },
        {
            type: "input",
            message: "Where do you reside?",
            name: "locationAns",
            default: "Residence"
        },
        {
            type: "input",
            message: "What would you like for your bio?",
            name: "bioAns",
            default: "Background"
        },

        {
            type: "input",
            message: "What is your LinkedIn url?",
            name: "linkedInAns",
            default: "https://www.linkedin.com/"
        },

        {
            type: "input",
            message: "What is your GitHub url?",
            name: "gitHubAns",
            default: "https://github.com/"
        }
    ];
    return questionArray;
}

module.exports = {
    questionBuilder : questionBuilder
}