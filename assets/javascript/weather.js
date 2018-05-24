var weather = function() {
	var api_key = "2ff3fe9c5bf754ee9c37979fef2c77ae";
	var cors = "https://cors-everywhere.herokuapp.com/"
	var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + pos.lat + "&lon=" + pos.lng + "&appid=" + api_key;      
    var testURL = "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=2ff3fe9c5bf754ee9c37979fef2c77ae";
    $.ajax({
    	url: cors + queryURL,
        method: "GET"
    }).then(function(response) {
        var weatherIcon = "assets/images/" + response.weather[0].icon + ".png";
        var weatherDescription = response.weather[0].main;
        $("#weather").html($("<img>").attr("src", weatherIcon).attr("title", weatherDescription).attr("style", "width:100px;height:100px"))
        
    });
};