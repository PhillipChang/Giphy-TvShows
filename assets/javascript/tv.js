// Array to store Tv Show Gifs
var tvShows = ["Family Guy", "American Dad", "Spongebob", "One Punch Man"];

// Function to display Tv Show Gifs

function displayTvShow(){
    $(".tv-screen").empty();
    var tvshow = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    tvshow + "&api_key=LJgKtX1udypIR6BSXOCsDIUP4gt2dGG0";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log("this is the response:" +response);
        var results = response.data;
        console.log("this is response data" +response.data);

    for ( i = 0; i < 10; i++){
        var showDiv = $("<div>");
        var showImage = $("<img>");
        showImage.attr('src', results[i].images.fixed_height_still.url);
        showImage.attr('data-still', results[i].images.fixed_height_still.url);
        showImage.attr('data-animate', results[i].images.fixed_height.url);
        showImage.attr('data-state', "still");
        showImage.addClass('tv-gif');
        showDiv.append(showImage);
        console.log("this is showdiv: " +showDiv);
    $(".tv-screen").append(showDiv);
    }    
});
}

// Function to create new buttons

function newRemotes(){
    $(".remote-controls").empty();
    for ( i = 0; i < tvShows.length; i++){
        var remote = $("<button>");
        remote.addClass('tvshow');
        remote.attr('data-name', tvShows[i]);
        remote.text(tvShows[i]);
        $(".remote-controls").append(remote);
    }
}

// Function to add event listner to form
$("#add-tvshow").on("click", function(event){
event.preventDefault();
var tvshow = $("#tvshow-input").val().trim();
tvShows.push(tvshow);
console.log("this is tvshow input:" +tvshow);  
newRemotes();
});

$(document).on("click", ".tvshow", displayTvShow);

newRemotes();

$(document).on("click", ".tv-gif", function(){
    console.log("hello");
    var state = $(this).attr('data-state');
    console.log("this is state" +state);
    if (state === "still") {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', "animate");
      }
      else if (state === "animate") {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state',"still");
      }
});
