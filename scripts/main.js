var OMDb = "http://www.omdbapi.com/?apikey=1ca32dee&"
var Poster = "http://img.omdbapi.com/?apikey=1ca32dee&"
var BUTN_SEL = '[data-movie-selector]'

function getMovieData(searchString){
    var searchURL = OMDb + "s=" + searchString;
    $.get(searchURL, function (data) {
        console.log(data);
        return data;
    })
}

function getPosterData(searchP){
    var searchPoster = OMDb + "s=" + searchP;
    $.get(searchPoster, function (data) {
        console.log(data);
        return data;
    })
}

// function makeMovieElement(y){
//     var disOne = $("<p></p>").text(y);
//     $("header").append(y);
// }



//This would essentially serve as my main function.
//This is returning information, but I think it's poster information.
$(BUTN_SEL).on("dblclick", function(event){ 
    event.preventDefault();
    getMovieData($("#movie-search").val());
    getPosterData($("#movie-search").val());
});



//3. Set up makeMovieElement function.
// Build an app that presents the user with a search form and queries OMDb for movie 
// information. For each result, use promises to run a function that draws the movie 
// information to the DOM.

//4. Set up makePosterElement function.
// Build an app that presents the user with a search form and queries for poster 
// information. For each result, use promises to run a function that draws the poster 
// information to the DOM.

//5. Set up saveMovie function.
// For each movie in the watch list, draw that movie to 
// another part of the page, along with a checkbox. Save it to localStorage

//6. Set up removeMovie function.
// For each movie in the watch list, draw that movie to 
// another part of the page, along with a checkbox. When the user clicks the checkbox 
// next to a movie in the watch list, it should be removed from localStorage.

//7. Set up listMovies.
// Add a checkbox or some other UI element so that the user can indicate 
// that they want to add the movie to their personal watch list. Save this movie 
// information to localStorage.

//8. Go through ideal main function and helper functions with Chris and refractor 
//everything.

//9. Go back through and set everything up with promises and handle errors with .catch.