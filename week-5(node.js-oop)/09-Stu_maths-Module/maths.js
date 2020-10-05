function sum(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var sum = num1 + num2;
    if(isNaN(sum)){
        return ("Please only input numbers");
    }
    else{
        return (`${num1} + ${num2} = ${sum.toFixed(2)}`);
    }
}

function difference(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var difference = num1 - num2;
    if(isNaN(difference)){
        return ("Please only input numbers");
    }
    else{
        return (`${num1} - ${num2} = ${difference.toFixed(2)}`);
    }
}

function product(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var product = num1 * num2;
    if(isNaN(product)){
        return ("Please only input numbers");
    }
    else{
        return (`${num1} ${String.fromCharCode(215)} ${num2} = ${product.toFixed(2)}`);
    }
}

function quotient(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var quotient = num1 / num2;
    if(isNaN(quotient)){
        return ("Please only input numbers");
    }
    else{
        return (`${num1} ${String.fromCharCode(247)} ${num2} = ${quotient.toFixed(2)}`);
    }
}

module.exports = {
    sum: sum,
    difference: difference,
    product: product,
    quotient: quotient
  };
  