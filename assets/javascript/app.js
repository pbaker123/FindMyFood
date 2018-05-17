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
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log(pos);
          $("#location").html("your location is lat: " + pos.lat + " long: " + pos.lat);
        }, function() {
          handleLocationError(true, map.getCenter());
        });
      } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map.getCenter());
      }
    }

    var queryURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAEnHfgL17CU3dvMKKGW9kOuRHLcYZ7EQ8&callback=" + initMap() + "async defer";

    $(document).ready(function(){
      $.ajax({
        url: queryURL,
        method: "GET"
      });
  });