var maths = require("./maths.js");

var operation = process.argv[2];
var firstNum = process.argv[3];
var secondNum = process.argv[4];

if(operation === "sum"){
    console.log(`${maths.sum(firstNum, secondNum)}`);
}
else if(operation === "difference"){
    console.log(`${maths.difference(firstNum, secondNum)}`);
}
else if(operation === "product"){
    console.log(`${maths.product(firstNum, secondNum)}`);
}
else if(operation === "quotient"){
    console.log(`${maths.quotient(firstNum, secondNum)}`);
}
else{ 
    console.log("Please select a proper operation: sum, difference, product, quotient");
}

switch(operation){
    case "sum":
        console.log(`${maths.sum(firstNum, secondNum)}`);
        break;
    case "difference":
        console.log(`${maths.difference(firstNum, secondNum)}`);
        break;
    case "product":
        console.log(`${maths.product(firstNum, secondNum)}`);
        break;
    case "quotient":
        console.log(`${maths.quotient(firstNum, secondNum)}`);
        break;
    default:
        console.log("Please select a proper operation: sum, difference, product, quotient");
        break;
}