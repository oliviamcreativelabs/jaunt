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

/**   
 * !  $("#search_button")**/.on("click", function () { 
        var accessToken = "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
        var city = $("#userInput").val(); // <- The city variable will hold the results we get from the user's inputs via HTML
        var queryURL = "https://api.yelp.com/v3/businesses/search?&location=" + city;

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
    url: "https://api.yelp.com/v3/businesses/search?&location=" + city,
    dataType: "json",
    headers: {
        "Authorization": "Bearer " +
            "3uLaVQrJwP21kaJjuErLNk5QE9TTtwtFA7LErPkhI32wZg6PYKUll05F-9_fkoK45CnUZ6qyVOXkvHGjRK-9ajm-CtR9J3r7d5zMfcl72IUJbtLy8yUpSZ-uHlpmWnYx"
    },
    success: function (response) {
        for (var i = 0; i < response.businesses.length; i++) {
            var obj = response.businesses[i];
            console.log(obj);
            console.log(obj.name);
            var div = $("<div>"); 
            div.html(obj.name);
    /**  
     * !    $("#STORE_DATA")**/.append(div); //! << CHANGE (#STORE DATA) TO MATCH HTML ID 
   
        }
    },

})
})
 /** 
*! NOTE: Errors expected at 15/51/59  due to commented out code--Please double check when removing comments
**/
