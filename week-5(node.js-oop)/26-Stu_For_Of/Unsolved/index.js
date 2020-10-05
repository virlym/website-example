// set all the songs to a variable
const listItems = document.querySelectorAll("li");

// set the counter to the first entry
let entryCount = 1;

// run a loop through all the song items
for (const value of listItems) {
  //console.log(value.textContent);
  // add the class 'red-text' to all the items
  value.classList.add("red-text");

  // bored
  // if it's an even entry, change it to green
  if(entryCount%2===0){
    value.classList.remove(...value.classList);
    value.classList.add("green-text");
  }
  
  // if it's the 7th entry, change it to slate
  if(entryCount === 7){
    value.classList.remove(...value.classList);
    value.classList.add("slate-text");
  }

  // increase the entry counter
  entryCount++;
}
