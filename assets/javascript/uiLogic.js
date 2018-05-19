var page=1;
var rated; 
var use;
$( document ).ready(function() {
    console.log( "ready!" );


$("#loadingSplash").hide();
$("#iconPage").hide();
$("#page3").hide();
$("#instructions").show();


console.log("UI engaged");


$("#start").on("click", function(){
    console.log("start pressed");
    page++;
    $("#instructions").hide();
    $("#iconPage").show();
});

$("#iconPage").on("click", function(){
    $("#iconPage").hide();
    $("#page3").show();
});
});
