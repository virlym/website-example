/*
create an script.js
Using the provided index.html, complete the following
Target the div with the ID of articles.
Change its font size to 50px.
Change its first child's, last child to have a font color of blue.
Change its previous sibling to have a background color of black.

Target the div with the ID of main.
Change its second child node so the text is underlined.
Change its last child element to have a font size of 50px.
Change its first child element to have a font color of orange.
Change its last child elements parent to have a font size of 40px.
*/
document.body.children[1].style.fontSize = "50px";
document.body.children[1].firstElementChild.lastElementChild.style.color = "blue";
document.body.children[1].previousElementSibling.style.backgroundColor = "black";

document.querySelector("#main").children[1].style.textDecoration = "underline";
document.querySelector("#main").lastElementChild.style.fontSize = "50px";
document.querySelector("#main").firstElementChild.style.color = "orange";
document.querySelector("#main").lastElementChild.parentElement.style.fontSize = "40px";