let dog = {
    raining : true,
    noise : "woof",
    makeNoise : function (){
        if (dog.raining){
            console.log(dog.noise);
        }
    }
};

let cat = {
    raining : false,
    noise : "meow",
    makeNoise : function (){
        if (cat.raining){
            console.log(cat.noise);
        }
    }
}

dog.makeNoise();
cat.raining = true;
cat.makeNoise();