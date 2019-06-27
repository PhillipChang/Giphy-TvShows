// Array to store Tv Show Gifs
var tvShows = ["Family Guy", "American Dad", "Spongebob", "One Punch Man"];

// Function to display Tv Show Gifs

function displayTvShow(){
    $(".tv-screen").empty();
    var tvshow = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    tvshow + "&api_key=LJgKtX1udypIR6BSXOCsDIUP4gt2dGG0";
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;
        console.log (response.data);

    for ( i = 0; i < 10; i++){
        var showDiv = $("<div>");
        showDiv.addClass('dvd');
        var showImage = $("<img>");
        showImage.attr('src', results[i].images.fixed_height_still.url);
        showImage.attr('data-still', results[i].images.fixed_height_still.url);
        showImage.attr('data-animate', results[i].images.fixed_height.url);
        showImage.attr('data-state', "still");
        showImage.addClass('tv-gif');
        showImage.addClass('animated rollIn delay-1s');
        showImage.addClass('card rounded-circle');
        showDiv.append(showImage);
        var rating = $("<p>");
        rating.text("Rating: " +results[i].rating);
        rating.addClass('rating');
        showDiv.append(rating);
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
        remote.addClass('btn btn-danger');
        remote.addClass('rounded-circle');
        remote.attr('data-name', tvShows[i]);
        remote.text(tvShows[i]);
        $(".remote-controls").append(remote);
    }
}

// Function to add event listner to form
$("#add-tvshow").on("click", function(event){
event.preventDefault();
if ($("#tvshow-input").val() === ""){
    alert("Please enter a tv show");
}
else {
var tvshow = $("#tvshow-input").val().trim();
tvShows.push(tvshow);
newRemotes();
}
});

$(document).on("click", ".tvshow", displayTvShow);

newRemotes();

// Pausing gif function
$(document).on("click", ".tv-gif", function(){
    var state = $(this).attr('data-state');
    if (state === "still") {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', "animate");
      }
      else if (state === "animate") {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state',"still");
      }
});
