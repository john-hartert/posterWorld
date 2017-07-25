var OMDb = "http://www.omdbapi.com/?apikey=1ca32dee&"
var BUTN_SEL = '[data-movie-selector]'

function getMovieData(searchString){
    var searchURL = OMDb + "s=" + searchString;
    return $.get(searchURL);
}
//Always return ajax requests promise.

function makeMovieElement(data){
    var movies = data["Search"];
    for (var i = 0; i < movies.length; i++){
        var para = $("<p></p>");
        var intermed = movies[i]["Title"];
        para.text(movies[i]["Title"]);
        $("footer").append(para);
    }   
}


//This would essentially serve as my main function.
$(BUTN_SEL).on("dblclick", function(event){ 
    event.preventDefault();
    getMovieData($("#movie-search").val())
        .then(makeMovieElement)
});

//3. Set up makeMovieElement function.
// Draw the movie information to the DOM.

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

///////////////////////////////////Debug/////////////////////////////////////////////////
//1. Pretty sure it's returning poster information and movie information as the same 
//thing. Not sure what's going on there.

//2. Whenever you click in the search bar it sends a request, since it's set to on click.
//The information returns false, but I'm not sure if that's correct. Set to dblclick
//for the time being to avoid multiple searches.