//=====================================
//
//  ##    ##  #####  ##      #####
//   ##  ##   ##     ##      ##  ##
//    ####    #####  ##      #####
//     ##     ##     ##      ##
//     ##     #####  ######  ##
//
//=====================================
/**
*! NOTE: Errors expected at 15/51/59  due to commented out code--Please double check errors are resolved after removing comments
**/
// DOCUMENT READY
$(function () {

//      $("#search_button").on("click", function () {
        var accessToken = "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
        var city = $(/*"#USER-INPUT"*/).val(); // <- The city variable will hold the results we get from the user's inputs via HTML
        var queryURL = "https://api.yelp.com/v3/businesses/search?&location=" + "chicago";

/**
 * ! AJAX PREFILTER -- DO NOT CHANGE ----------------------------------------v
 **/

jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

/**
 * ! AJAX PREFILTER  DO NOT CHANGE ------------------------------------------^
 **/

// AJAX CALL
$.ajax({
    type: "GET",
    url: "https://api.yelp.com/v3/businesses/search?&location=" + "Chicago",
    dataType: "json",
    headers: {
        "Authorization": "Bearer " +
            "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
    },
    success: function (response) {
        for (var i = 0; i < 5; i++) {
            var obj = response.businesses[i];
            console.log(obj.name);
            var div = $("<div>");
            div.html(obj.name);

        $("#food-card-expanded").append(div); //! << CHANGE (#STORE DATA) TO MATCH HTML ID

        }
    },

})
})

//==================================================================================================
//
//  ######  ##   ####  ##  ##  #####  ######  ###    ###    ###     ####  ######  #####  #####
//    ##    ##  ##     ## ##   ##       ##    ## #  # ##   ## ##   ##       ##    ##     ##  ##
//    ##    ##  ##     ####    #####    ##    ##  ##  ##  ##   ##   ###     ##    #####  #####
//    ##    ##  ##     ## ##   ##       ##    ##      ##  #######     ##    ##    ##     ##  ##
//    ##    ##   ####  ##  ##  #####    ##    ##      ##  ##   ##  ####     ##    #####  ##   ##
//
//==================================================================================================

// $("#SEARCH BUTTON").on("click", function (stringified) {
  // var city = $("#userInput").val(); // ! << Uncomment,  generate input box &  replace #id 
 //  var city = "Chicago" // ! Uncomment to hardcode
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&city=";
 //  getQuote(); // ! << Call getQuote Function

    // AJAX call ----
    function getQuote() {
        $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {
        //    console.log(data);
        //    console.log(data._embedded.events[0].name);
        //    console.log(data._embedded.events.length);
            for (var i = 0; i < 5; i++) {
                var obj = data._embedded.events[i];
                    console.log(obj);
                    console.log(obj.name);
                var div = $("<div>"); // Create a div
                    div.html(obj.name);
                         $("#well-section").append(div);
                var artistName = $("<h1>").text(obj.name);
                var artistURL = $("<a>").attr("href", obj.url).append(artistName);
               // $("#url-displayed-in-an-<h1>-tag").append(artistURL); // ! << Remove comment & enter correct #id 

// ! Copy and paste url & add a city in the search to see a test example: ("file:///C:/Users/Dan/Documents/Northwestern/bandify/index.html")
            }
        })
    }

