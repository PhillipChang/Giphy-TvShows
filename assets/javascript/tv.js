// Array to store Tv Show Gifs
var tvShows = ["Family Guy", "American Dad", "Spongebob", "One Punch Man"];

// Function to display Tv Show Gifs
function displayTvShow(){
    $("#tv-screen").empty();
    var tvshow = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    tvshow + "&api_key=LJgKtX1udypIR6BSXOCsDIUP4gt2dGG0";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);    
    $(".tv-screen").append()
    });
}

// Function to create new buttons

function newRemotes(){
    $(".remote-controls").empty();
    for ( i = 0; i < tvShows.length; i++){
        var remote = $("<button>");
        remote.addClass("tvshow");
        remote.attr("data-name", tvShows[i]);
        remote.text(tvShows[i]);
        $(".remote-controls").append(remote);
    }
}

// Function to add event listner to form
$("#add-tvshow").on("click", function(event){
event.preventDefault();
var tvshow = $("#tvshow-input").val().trim();
tvShows.push(tvshow);
newRemotes();
});

$(document).on("click", ".movie", displayTvShow);

newRemotes();

