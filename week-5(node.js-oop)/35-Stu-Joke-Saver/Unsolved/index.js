const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);



async function init(){
  const config = { headers: { accept: "application/json" } };
  const axiosData = await axios.get("https://icanhazdadjoke.com/", config);
  await appendFileAsync("jokes.txt", JSON.stringify(axiosData.data.joke) + "\r\n", "utf8");
  const jokesFileData = await readFileAsync("jokes.txt", "utf8");
  console.log(jokesFileData);
}

init();

// const config = { headers: { accept: "application/json" } };

// axios.get("https://icanhazdadjoke.com/", config)
//   .then(function(res) {
    
    //console.log(res.data);
    // fs.appendFile("jokes.txt", JSON.stringify(res.data.joke) + "\r\n", "utf8", function(err){
    //   if (err) {
    //     throw err;
    //   }


    //   fs.readFile("jokes.txt", "utf8", function(err, data) {
    //     if (err) {
    //       throw err;
    //     }
    //     console.log(data);
    //   });

    // });

  // });
