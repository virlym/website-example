// Create your HTML Page via DOM Methods here!

/*
You have been provided a standard HTML document.
You may only work inside your script.js.
Inside script.js and using only DOM methods, create an entire HTML page. It should include:

-A centered h1 with a centered h2 under it.
-A centered image, with a center caption under it.
-A list of your favorite foods (or some other list of favorites).
BONUS: Some extra styling to all elements.

*/


//create h1, set the text, add it to the body
var myH1 = document.createElement("h1");
myH1.textContent = "First Header, H1";
document.querySelector("body").appendChild(myH1);

//create h1, set the text, add it to the body
var myH2 = document.createElement("h2");
myH2.textContent = "Second Header, H2";
document.querySelector("body").appendChild(myH2);

//create a figure div for the image, add it to the body
var myFig = document.createElement("figure");
document.querySelector("body").appendChild(myFig);

//create image, set the source attribute, set alt tag, add to figure
var myImg = document.createElement("img");
myImg.setAttribute("src", "http://placekitten.com/200/300");
myImg.setAttribute("alt", "kitty placeholder");
document.querySelector("figure").appendChild(myImg);

//create an img caption, set the text, add to the figure
var myCap = document.createElement("figcaption");
myCap.textContent = "random kitty";
document.querySelector("figure").appendChild(myCap);

//create a ul for the list container, add to the body
var myUl = document.createElement("ul");
document.querySelector("body").appendChild(myUl);

//create the first list element, set text, add to the ul
var myLi1 = document.createElement("li");
myLi1.textContent = "Food 1";
document.querySelector("ul").appendChild(myLi1);

//create the second list element, set text, add to the ul
var myLi2 = document.createElement("li");
myLi2.textContent = "Food 2";
document.querySelector("ul").appendChild(myLi2);

//create the third list element, set text, add to the ul
var myLi3 = document.createElement("li");
myLi3.textContent = "Food 3";
document.querySelector("ul").appendChild(myLi3);

//set the styles for the h1 to center text
document.querySelector("h1").style.textAlign = "center";
//set the styles for the h2 to center text
document.querySelector("h2").style.textAlign = "center";
//set the styles for the figure to center the img
document.querySelector("figure").style.textAlign = "center";