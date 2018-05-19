  var pos = [];
  var setRadius;
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6x5BYfR2yV9_yS-pYsDZ8RrU7ef3U56o",
    authDomain: "findmyfood-869fa.firebaseapp.com",
    databaseURL: "https://findmyfood-869fa.firebaseio.com",
    projectId: "findmyfood-869fa",
    storageBucket: "findmyfood-869fa.appspot.com",
    messagingSenderId: "811192802841"
  };

  firebase.initializeApp(config);

  // initial Gmap call with our api.  Take a look at this example: https://developers.google.com/maps/documentation/javascript/examples/map-simple

    function initMap() {
      // Try HTML5 geolocation.
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          weather()
          //console.log(pos);
          $("#location").html("your location is lat: " + pos.lat + " long: " + pos.lng);
          
          // testing resturant pull with fixed radius
          
          console.log(pos.lat);
          console.log(pos.lng);
          
          $(".content").on("click", function(){
            var mode = $(this).attr("data-mode");
            if (mode == "walking"){
              setRadius = 1609;
              console.log(setRadius);
              getFood();
            }
            else if (mode == "bicycle"){
              setRadius = 8046;
              console.log(setRadius);
              getFood();
            }
            else if (mode == "car"){
              setRadius = 16093;
              console.log(setRadius);
              getFood();
            }      
          });
    
          //var queryfoodURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ pos.lat +","+ pos.lng +"&radius=" + setRadius +"&type=restaurant&key=AIzaSyAEnHfgL17CU3dvMKKGW9kOuRHLcYZ7EQ8"
          //console.log(queryfoodURL);

        }, function() {
          handleLocationError(true);
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false);
       
      }
    }
    
    function getFood (){
      var queryfoodURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ pos.lat +","+ pos.lng +"&radius=" + setRadius +"&type=restaurant&key=AIzaSyAEnHfgL17CU3dvMKKGW9kOuRHLcYZ7EQ8"
      console.log(queryfoodURL);
    }
    var queryURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEnHfgL17CU3dvMKKGW9kOuRHLcYZ7EQ8&callback=" + initMap() + "async defer";
