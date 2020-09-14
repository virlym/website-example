/*
addEventListener On Click
In this activity, we are going to create a button that increments a counter when clicked.

Instructions
In a file called index.html, create a button containing the string "Increment".
In a file called script.js, create an event listener with a callback that increments the counter and displays the updated count on the webpage.
Add a button that decrements the counter when clicked
Bonus
Add some code to ensure that the count never gets below 0.

*/
//function to decrease the count by 1

var rate = 1;
function decreaseCount(){
    var num = document.querySelector("#count").textContent;
    if(num > 0){
        num--;
        document.querySelector("#count").textContent = num;
    }
    //if the number is at 0, it won't change
    else{
        console.log("can't go below 0");
    }
}

//function to increase the count by 1
function increaseCount(){
    var num = document.querySelector("#count").textContent;
    num++;
    document.querySelector("#count").textContent = num;
}

//reset the count to 0
function resetCount(){
    document.querySelector("#count").textContent = 0;
}
function decCount(){
    var num = document.querySelector("#count").textContent;
    if(num > 0){
        num = num - rate;
        if(num >= 0){
            document.querySelector("#count").textContent = num;
        }
        else{
            document.querySelector("#count").textContent = 0;
            console.log("stopping at 0");
        }
    }
    //if the number is at 0, it won't change
    else{
        console.log("can't go below 0");
    }
}

function incCount(){
    var num = document.querySelector("#count").textContent;
    num = parseInt(num) + rate;
    document.querySelector("#count").textContent = num;
}

function changeRate(){
    rate = Math.floor(Math.random()*10);
    document.querySelector("#decRand").textContent = "Decrement by " + rate;
    document.querySelector("#incRand").textContent = "Increment by " + rate;
}
//create quick reference points for the DOM references
var decButton = document.querySelector("#decrement");
var incButton = document.querySelector("#increment");
var resButton = document.querySelector("#reset");
var decModButton = document.querySelector("#decRand");
var incModButton = document.querySelector("#incRand");
var rateButton = document.querySelector("#rateChange");

//add button actions
decButton.addEventListener("click", decreaseCount);
incButton.addEventListener("click", increaseCount);
resButton.addEventListener("click", resetCount);
decModButton.addEventListener("click", decCount);
incModButton.addEventListener("click", incCount);
rateButton.addEventListener("click", changeRate);

