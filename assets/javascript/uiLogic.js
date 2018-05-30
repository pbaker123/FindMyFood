var page = 1;
var rated;
var use;
var currentTime;
var clearTime;
var waiting = false;

function hideAll() {
    $( "#restaurantNameRefresh" ).hide();
    $( "#restaurantMap" ).hide();
    $( "#restaurantName" ).hide();
    $(" #thumbs").hide();
    $( "#restaurantChoice" ).hide();
    $( ".jumbotron" ).hide();
    $( "#pageChoice" ).hide();
    $( "#iconPage" ).hide();
    $( "#instructions" ).hide();
    $( "#restChoice" ).hide();
    $("#voteHistory").hide();
    $("#no-go").hide();
}

function load() {
    $( "#loadingSplash" ).show();
}

function page4(){
    hideAll();
    $("#thumbs").show();
    $("#no-go").show();
    $(".jumbotron").show();
    $( "#restaurantNameRefresh" ).show();
    $("#restaurantNameRefresh").prepend("Last time you visited " + previousRestaurantName + "<br> Let us know what you thought.");

}

function page3() {
    waiting = true;
    $ ("#loadingSplash").hide();
    $( "#restaurantName" ).show();
    $( "#restaurantMap" ).show();
    $ ("#thumbs").hide();
    $( ".jumbotron" ).show();
    $( "#loadingSplash" ).hide();
    $( "#iconPage" ).hide();
    $( "#restaurantChoice" ).show();
    $( "#restChoice" ).show();
    $("#voteHistory").show();
    // setInterval( getCurrentTime, 10000 );
    // $( "#restaurantName").html(restaurantName);
    // $( "#location").html(restaurantLocation);
}
function timeSetter() {
    currentTime = moment().format( "HH:mm" );
    localStorage.setItem( "time", currentTime );
    clearTime = moment( currentTime, 'HH:mm:ss' ).add( 1, 'minutes' ).format( 'HH:mm' );
    localStorage.setItem( "clearTime", clearTime );
    localStorage.setItem( 'waiting', waiting );
}
function page2() {

    $( "#loadingSplash" ).hide();
    $( ".jumbotron" ).show();
    console.log( "start pressed" );
    page++;
    $( "#instructions" ).hide();
    $( "#pageChoice" ).show();
    $( "#restaurantChoice" ).hide();
    timeSetter();
}
function page1() {
    $("#thumbs").hide();
    $( "#loadingSplash" ).hide();
    $( ".jumbotron" ).show();
    $( "#instructions" ).show();

}
function getCurrentTime() {
    currentTime = moment().format( "HH:mm" );
    console.log( "time updated: " + currentTime );
    console.log( "time to clear: " + localStorage.getItem( 'clearTime' ) );
    if ( currentTime > clearTime ) {
        waiting = false;
        console.log( "rate now" );
        localStorage.getItem( 'waiting', waiting );
        $("#thumbs").show();
    }
}
function reset() {

}
function timeCheck() {
    currentTime = moment().format( "HH:mm" );
    localStorage.setItem( 'time', currentTime );
    if ( localStorage.getItem( 'time' ) > localStorage.getItem( "clearTime" ) ) {
        waiting = false;
        localStorage.setItem( 'waiting', waiting );
        $("#thumbs").show();

        return;
        
    }
    else {
        localStorage.setItem( 'waiting', true )
        setInterval( timeCheck, 1000 );
    }
}