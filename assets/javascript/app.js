var pos = [];
var setRadius;
var origin;
var map;
var infowindow;
var previousRestaurantId;
var previousRestaurantName;
var workingSnapshot;
var thumbsUpTotal = 0;
var thumbsDownTotal = 0;
var key;
var content;
var vote;

  
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
 
var database = firebase.database();
// initial Gmap call with our api.  Take a look at this example: https://developers.google.com/maps/documentation/javascript/examples/map-simple

function initMap() {
  // if id exists in local storage do vote() else
  if (localStorage.getItem("id") != "") {
    vote()
  } else {
    // Try HTML5 geolocation.
    hideAll()
    load()
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        origin = position;
        console.log(origin)
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        page1()
        weather()
      }, function() {
        handleLocationError(true);
        alert("no geo!");
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false);
      //alert("no geo!");
    }
  }
};
    
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
};

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    var index = Math.floor(Math.random() * results.length);
    var restaurantName = results[index].name;
    var restaurantLocation = results[index].vicinity;
    console.log("Name: " + restaurantName + " | Location: " + restaurantLocation);
    $( "#restaurantName").html(restaurantName);
    $( "#location").html(restaurantLocation);

    var currentRestaurantId = results[index].id;
    var currentRestaurantName = results[index].name;
    localStorage.setItem("id", currentRestaurantId);
    localStorage.setItem("name", currentRestaurantName);
    console.log("Name: " + restaurantName + " | Location: " + restaurantLocation)
    console.log(results[index])
    $("#restaurantName").text(restaurantName + " - " + restaurantLocation);
    $("#restaurantMap").html("<iframe class='embed-responsive-item' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAEnHfgL17CU3dvMKKGW9kOuRHLcYZ7EQ8&q=" + restaurantLocation + "'</iframe>");
  }
};

function vote() {
  previousRestaurantId = localStorage.getItem("id");
  previousRestaurantName = localStorage.getItem("name");
  localStorage.setItem("id", "");
  localStorage.setItem("name", "");
  console.log("previous: " + previousRestaurantName)
  hideAll()
  $("#thumbs").show();
};

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
//   infoWindow.open(map);
// }

function handleLocationError(error) {
  console.log(error);
  switch (error.code) {
    case 3:
      // ...deal with timeout
      break;
    case 2:
      // ...device can't get data
      break;
    case 1:
      // ...user said no ☹️
  }
}

$(".vote").on("click", function(event) {
  vote = $(this).attr("data-mode")
  database.ref("restaurant").orderByChild("id").equalTo(previousRestaurantId).once("child_added", function(data) {
    key = data.key;
  });
  setTimeout(run, 500)
});

function run() {
  console.log(key)
  if (key === undefined){
    recordData()
  } else {
    updateData()
  }
};

function recordData() {
  if (vote === "thumbs-up") {
    thumbsUpTotal++
    database.ref("restaurant").push({
      id: previousRestaurantId,
      name: previousRestaurantName,
      thumbsUp: thumbsUpTotal,
      thumbsDown: thumbsDownTotal
    })
    initMap() 
  } else if (vote === "thumbs-down") {
    thumbsDownTotal++
    database.ref("restaurant/" + key).update({
      id: previousRestaurantId,
      name: previousRestaurantName,
      thumbsUp: thumbsUpTotal,
      thumbsDown: thumbsDownTotal
    })
    initMap()
  }
};

function updateData() {
  if (vote === "thumbs-up") {
    thumbsUpTotal++
    database.ref("restaurant/" + key).update({
      id: previousRestaurantId,
      name: previousRestaurantName,
      thumbsUp: thumbsUpTotal,
      thumbsDown: thumbsDownTotal
    })
    initMap()
  } else if (vote === "thumbs-down") {
    thumbsDownTotal++
    database.ref("restaurant/" + key).update({
      id: previousRestaurantId,
      name: previousRestaurantName,
      thumbsUp: thumbsUpTotal,
      thumbsDown: thumbsDownTotal
    })
    initMap()
  }
};

$(".content").on("click", function(){
  var mode = $(this).attr("data-mode");
  if (mode === "walking"){
    setRadius = 1609;
    console.log(setRadius);
    hideAll();
    load();
    setTimeout( page3, 5000 );
    getFood();
  }
  else if (mode === "bicycle"){
    setRadius = 8046;
    console.log(setRadius);
    hideAll();
    load();
    setTimeout( page3, 5000 );
    getFood();
  }
  else if (mode === "car"){
    setRadius = 16093;
    console.log(setRadius);
    hideAll();
    load();
    setTimeout( page3, 5000 );
    getFood();
  }      
});

$("#start").on("click", function() {
  hideAll();
  load();
  setTimeout(page2, 2000);
});