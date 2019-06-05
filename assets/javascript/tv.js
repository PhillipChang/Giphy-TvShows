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
    })
}