// resources
// https://github.com/spotify/web-api-auth-examples/blob/master/client_credentials/app.js
// https://stackoverflow.com/questions/28617587/spotify-web-api-ajax
// https://developer.spotify.com/documentation/web-api/reference/browse/get-categorys-playlists/
// https://stackoverflow.com/questions/20155531/converting-curl-cmd-to-jquery-ajax



// Client ID f55ff3e4a86e45a3b4edf6c4b74c3d32
// Client Secret a683cc36be6f43f894684d727dd19297
// GET https://accounts.spotify.com/authorize

// &client_id=f55ff3e4a86e45a3b4edf6c4b74c3d32
// &response_type=code 
// &redirect_uri=https%3A%2F%2Fgoogle.com
// &scopes=playlist-read-private
/*
    https://accounts.spotify.com/authorize?client_id=f55ff3e4a86e45a3b4edf6c4b74c3d32&response_type=code&redirect_uri=https%3A%2F%2Fgoogle.com&scopes=playlist-read-private
*/

// AQC_U5O4IhFKVuYiw24FxWPSfKMD91eLUYcVO78oUBP83M5i6do7-hk4FT4c-BnkZWTej2_X7k8JY7FfdxmXSW0tv-SfMKDmT4tkM5RJfRSf2-S6aCCQW_Wv703sVoaCkWYzHWu0DAFU5wHZugc7stghjgbgpQ
/*
curl -H "Authorization: Basic ZjU1ZmYzZTRhODZlNDVhM2I0ZWRmNmM0Yjc0YzNkMzI6YTY4M2NjMzZiZTZmNDNmODk0Njg0ZDcyN2RkMTkyOTc=" -d grant_type=authorization_code -d code=${returnedCode} -d redirect_uri=https%3A%2F%2Fgoogle.com https://accounts.spotify.com/api/token
*/

// f55ff3e4a86e45a3b4edf6c4b74c3d32:a683cc36be6f43f894684d727dd19297
// ZjU1ZmYzZTRhODZlNDVhM2I0ZWRmNmM0Yjc0YzNkMzI6YTY4M2NjMzZiZTZmNDNmODk0Njg0ZDcyN2RkMTkyOTc=

/*
{"access_token":"BQBuC_L9v4GfN0bWpaFe4JBkrTMW_M7KpD6x-qlIOo-khI4_XWvxOIxqtGW2cXAQuAMe9U3zaaTuLPKUzryaMt2xkbAWHaWb0MicA7tpjerP6tqRziukmNXLQ4aZsQehWXycgkCn26tvQ108Xt4fg23dm6G7UVOKaQ","token_type":"Bearer","expires_in":3600,"refresh_token":"AQAECWj6nUaTWFDDFk30cX9QRqsZRySJGz5bGUitGRs1uSgNkVWi4yaJIaxbIfl5uNj4OgAP0q-ajnJo9Q8G9q46BFYj0bc5OJIL59i6wZUA1LE3KEhZD03gLDeBcKLCQTY","scope":""}
*/


// BQARw0uR1_fXgyaWDo2kSEWRfLoJXFdfogbpnKK4ToJ4sC1fm4KMKWolSglnbrrabDE5t5-RzVLWW4zrDIq4yp0ExhPrdPrCWCC002ydJXDeWIfBGbRT5JpVBlGLrDO1liuSsYpVJDYxPdct0Mqx3z6MKbYqsIDuJg
// Initial array of movies

//var request = require("request");
var user_id = "GymBro"
var token = "Bearer BQBuC_L9v4GfN0bWpaFe4JBkrTMW_M7KpD6x-qlIOo-khI4_XWvxOIxqtGW2cXAQuAMe9U3zaaTuLPKUzryaMt2xkbAWHaWb0MicA7tpjerP6tqRziukmNXLQ4aZsQehWXycgkCn26tvQ108Xt4fg23dm6G7UVOKaQ"
var playlist_url = `https:api.spotifiy.com/v1/users/${user_id}/playlists`;

// request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
//     if (res){
//         var playlists = JSON.parse(res.body);
//         var playlist_url = playlists.items[0].href
//         request({url:playlist_url, headers:{"Authorization":token}}, function(err, res){
//             if (res){
//                 var playlist = JSON.parse(res.body);
//             }
//         });
//     }
// });


////////////////////////

// POST https://accounts.spotify.com/api/token
// grant_type=client_credentials
/*
headers {
        'Authorization' : 'Basic ' + ZjU1ZmYzZTRhODZlNDVhM2I0ZWRmNmM0Yjc0YzNkMzI6YTY4M2NjMzZiZTZmNDNmODk0Njg0ZDcyN2RkMTkyOTc=;
    }
*/
var genreArray = ["pop", "workout", "kpop", "hiphop", "rock"];

function checkSpot(){
    $.ajax({
        url: "https://accounts.spotify.com/api/token",
        beforeSend: function(xhr){xhr.setRequestHeader(`Authorization`, `Basic ZjU1ZmYzZTRhODZlNDVhM2I0ZWRmNmM0Yjc0YzNkMzI6YTY4M2NjMzZiZTZmNDNmODk0Njg0ZDcyN2RkMTkyOTc=`);},
        processData: false,
        data: "grant_type=client_credentials",
        json: true,
        type: "POST",
        success: function(data) {
            console.log(data);
            var token = `${data.token_type} ${data.access_token}`;
            console.log(token);
            var randomGenre = Math.floor(Math.random()*genreArray.length);
            console.log(`Genre : ${genreArray[randomGenre]}`);
            $.ajax({
                url: `https://api.spotify.com/v1/browse/categories/${genreArray[randomGenre]}/playlists`,
                beforeSend: function(xhr){xhr.setRequestHeader(`Authorization`, `${token}`);},
                json: true,
                type: "GET",
                success: function(data) {
                    playlistInfo = data.playlists;
                    var randomPlaylist = Math.floor(Math.random()*playlistInfo.items.length);
                    console.log("playlist returns:");
                    console.log(data);
                    console.log(randomPlaylist);
                    console.log(`uri : ${playlistInfo.items[randomPlaylist].uri}`);
                    // id = song-playlist
                    $("#song-playlist").attr("src", playlistInfo.items[randomPlaylist].uri);
                    // <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                },
                error: function(){
                    console.log("cannot get playlist");
                }
            });

        },
        error: function(){
          console.log("Cannot get data");
        }
    });
}

// curl -X "POST" -H "Authorization: Basic ZjU1ZmYzZTRhODZlNDVhM2I0ZWRmNmM0Yjc0YzNkMzI6YTY4M2NjMzZiZTZmNDNmODk0Njg0ZDcyN2RkMTkyOTc=" -d grant_type=client_credentials https://accounts.spotify.com/api/token



// curl -H "Authorization: Bearer BQCAMJxObnXrpyBVPDYK4t6hYkVMhfiuHbD-QtFUd91BXaaCuRMuD26qs8LQ3khZxjUPQqWLl3ScLgXLVO0" https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V

var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo() {

  var movie = $(this).attr("data-name");
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  // Creates AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      console.log(response);
      $("#movies-view").empty();
      var mTitle = $("<div>");
      var mRating = $("<div>");
      var mRelease = $("<div>");
      var mPlot = $("<div>");
      var mPoster = $("<img>");

      mTitle.text(` Title : ${response.Title}`);
      mRating.text(` Rating : ${response.Rated}`);
      mRelease.text(` DVD Release Date : ${response.DVD}`);
      mPlot.text(` Plot : ${response.Plot}`);
      mPoster.attr("src", response.Poster);

      $("#movies-view").append(mTitle, mRating, mRelease, mPlot, mPoster);
    // YOUR CODE GOES HERE!!!
    /*
      Movie Poster - response.Poster
      Rating - response.Rated
      Release Date - response.DVD
      Plot - response.Plot
      <div id="movies-view"></div>
    */

  });

}

// Function for displaying movie data
function renderButtons() {

  // Deletes the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Loops through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generates buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adds a class of movie to our button
    a.addClass("movie");
    // Added a data-attribute
    a.attr("data-name", movies[i]);
    // Provided the initial button text
    a.text(movies[i]);
    // Added the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

// This function handles events where the add movie button is clicked
$("#add-movie").on("click", function(event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  movies.push(movie);

  // Calling renderButtons which handles the processing of our movie array
  renderButtons();

});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayMovieInfo);

// Calling the renderButtons function to display the initial buttons
renderButtons();