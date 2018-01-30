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
$(function() {

  $("#food-button").on("click", function () {
  event.preventDefault();
  /**
   * ! AJAX PREFILTER -- DO NOT CHANGE ----------------------------------------v
   **/

  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
      options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
  });

  /**
   * ! AJAX PREFILTER  DO NOT CHANGE ------------------------------------------^
   **/

  // AJAX CALL
  // creating variables of user inputs
  // var city = $("#city-input").val().trim();
  // var cuisineChoise = $("#cuisine-input").val().trim();
  var city = "Chicago";
  var cuisineChoise = "mexican";
  var queryURL = "https://api.yelp.com/v3/businesses/search?term=restaurant&location="+ city + "&categories=" + cuisineChoise;

  $.ajax({
    type: "GET",
    url: queryURL,
    dataType: "json",
    headers: {
      "Authorization": "Bearer " +
        "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
    },
    success: function(response) {
      for (var i = 0; i < 5; i++) {
        var obj = response.businesses[i];
        console.log(obj);
        var div = $("<div>");

        var restImg = obj.image_url; //stores business image link.
        var img = $("<img>").attr("src", restImg).attr("class", "rest-img"); //creates image tag and adds image url and class for styling.
        var imgLink = $("<br><a href=" + obj.url +"></a><br>")
        imgLink.append(img)
        // img.attr("src", restImg);
        // img.attr("class", "rest-img");


        $("#food-card-expanded").append(imgLink);

      }
    },

    })
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
    var city = $(/*"#USERINPUT"*/).val();
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=music&city=";
    getQuote(); // ! << Call getQuote Function

    // AJAX call ----
    function getQuote() {
        $.get(queryURL + city + "&apikey=RAJIFQErgEgMNdIAtVrRj7Z6bAWPY0cl", function (data, status) {
            console.log(data);
            console.log(data._embedded.events[0].name);
            console.log(data._embedded.events.length);
            for (var i = 0; i < data._embedded.events.length; i++) {
                var obj = data._embedded.events[i];
                    console.log(obj);
                    console.log(obj.name);
                var div = $("<div>"); // Create a div
                    div.html(obj.name);
                         $("#well-section").append(div);
            }
        })
    }
