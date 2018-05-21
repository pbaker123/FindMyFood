var pos = [];
var setRadius;
var origin;
var map;
var infowindow;
  
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
      origin = position;
      console.log(origin)
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      weather()
      // $("#location").html("your location is lat: " + pos.lat + " long: " + pos.lng);
      console.log(pos.lat);
      console.log(pos.lng);
    }, function() {
      handleLocationError(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false);
  }
}
    
function getFood() {
  var origin = {lat: pos.lat, lng: pos.lng};

  map = new google.maps.Map(document.getElementById('map'), {
    center: origin,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: origin,
    radius: setRadius,
    type: ['restaurant']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    var index = Math.floor(Math.random() * results.length);
    var restaurantName = results[index].name;
    var restaurantLocation = results[index].vicinity;
    console.log("Name: " + restaurantName + " | Location: " + restaurantLocation);
    $( "#restaurantName").html(restaurantName);
    $( "#location").html(restaurantLocation);

  }
}

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