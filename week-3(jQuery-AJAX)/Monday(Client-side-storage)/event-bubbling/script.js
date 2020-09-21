/*
In a file called index.html, create a div that contains two buttons: previous and next. The carousel should support the following features:

When the next button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.

When the previous button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.

When the user clicks on an image, they will be navigated to the url that hosts that image.
*/
//GRAB HTML REFERENCES TO CAROUSEL/NEXT/PREV CLASSES:​
//PROVIDED CODE
var carousel = document.querySelector("#carouselBox")
carousel.style.backgroundImage = "url('http://placekitten.com/300/200')";
var index = 0;
var images = [
  "http://placekitten.com/300/200",
  "http://placekitten.com/300/201",
  "http://placekitten.com/300/202",
  "http://placekitten.com/300/203"
];
var currentImage;
function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}
function goPrev(){
    //navigate(-1);
    event.stopPropagation();
    if(index === 0){
        index = 3;
    }
    else{
        index--;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
    console.log("left");
}

function goNext(){
    //navigate(1);
    event.stopPropagation();
    if(index === 3){
        index = 0;
    }
    else{
        index++;
    }
    currentImage = images[index];
    carousel.style.backgroundImage = "url('" + currentImage + "')";
    console.log("right");
}

function goImage(){
    window.location.href = images[index];
}
//ADD CLICK EVENTS BELOW

var prevButton = document.querySelector("#prev");
var nextButton = document.querySelector("#next");

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
carousel.addEventListener("click", goImage);