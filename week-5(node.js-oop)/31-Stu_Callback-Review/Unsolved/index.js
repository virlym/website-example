const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for( const data of animalJSON){
    if(data.species === "cat"){
      cats.push(data);
    }
    else if(data.species === "dog"){
      dogs.push(data);
    }
  }

  fs.writeFile("cats.JSON", JSON.stringify(cats, null, 2), "utf8", function(err){
    if (err) {
      throw err;
    }
    console.log("logged cats");
  });

  fs.writeFile("dogs.JSON", JSON.stringify(dogs, null, 2), "utf8", function(err){
    if (err) {
      throw err;
    }
    console.log("logged dogs");
  });

});
