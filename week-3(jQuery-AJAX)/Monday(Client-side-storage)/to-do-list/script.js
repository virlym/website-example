var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];

function init(){
    if(JSON.parse(localStorage.getItem("list")).length !== 0){
        todos = JSON.parse(localStorage.getItem("list"));
        renderList();
    }
    else{
        todos =["Learn HTML", "Learn CSS", "Learn JavaScript"];
        renderList();
    }
}

function storeTodos(){
    var storage = JSON.stringify(todos);
    localStorage.setItem("list", storage);
}

function renderList(){
    todoList.textContent = "";
    for(var i = 0; i < todos.length; i++){

        var myLi = document.createElement("li");
        myLi.textContent = todos[i];
        myLi.setAttribute("data-index", i);

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        myLi.appendChild(completeButton);
        todoList.appendChild(myLi);
    }
    todoCountSpan.textContent = todos.length;
    storeTodos();
}

function addToDo(event){
    event.preventDefault();
    if(todoInput.value.trim() === ""){
        return;
    }
    todos.push(todoInput.value.trim());
    todoInput.value = "";
    renderList();
}

function completeTask(event){
    if(event.target.matches("button")) {
        currentId = event.target.parentElement.getAttribute("data-index");
        todos.splice(currentId, 1);
        renderList();
    }
}

todoForm.addEventListener("submit", addToDo);
todoList.addEventListener("click", completeTask);

init();

//create the third list element, set text, add to the ul


/*
Render Todos
In this activity you will be writing code to render an array of todo items to the list.

Instructions
Open the script.js file provided to you. You have been provided the necessary variable declarations as well as an array of todo items.
Your goal is to create a function that will render our todos into a list in the browser.
Initially set the text content of the todoList to an empty string.
todoCountSpan should show the total count of todos on the page.

Inside of your render function you will also need a for loop.
It should loop over the todos array creating an li element for each index of the array.
It should set the content of the created li element to the value of the current array index.
Finally the new li should be appended to the ul provided.
*/