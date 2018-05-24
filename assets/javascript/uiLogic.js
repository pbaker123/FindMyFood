var page = 1;
var rated;
var use;
var currentTime;
var clearTime;
var waiting = false;

<<<<<<< HEAD
=======
$( document ).ready( function () {
    console.log( "ready!" );




    // $( "#loadingSplash" ).hide();
    // $( "#iconPage" ).hide();
    // $( "#pageChoice" ).hide();
    // $( "#instructions" ).show();
    hideAll();
    // timeCheck();
    localStorage.setItem("waiting", "false")

    if ( localStorage.getItem( 'waiting' ) == 'false' ) {


        console.log( "UI engaged" );
        hideAll();
        $( "#loadingSplash" ).show();
        setTimeout(page1,3000);
        $( "#start" ).on( "click", function () {
            hideAll();
            load();
            // $( "#loadingSplash" ).show();
            // debugger;
            setTimeout( page2, 2000 );

        } );

        $( ".content" ).on( "click", function () {
            hideAll();
            load();
            setTimeout( page3, 5000 );
        } );
    }
    else {
        hideAll();
        page3();
    }
} );



>>>>>>> master
function hideAll() {
    $( "#restaurantMap" ).hide();
    $( "#restaurantName" ).hide();
    $(" #thumbs").hide();
    $( "#restaurantChoice" ).hide();
    $( ".jumbotron" ).hide();
    $( "#pageChoice" ).hide();
    $( "#iconPage" ).hide();
    $( "#instructions" ).hide();
    $( "#restChoice" ).hide();
}

function load() {
    $( "#loadingSplash" ).show();

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
    setInterval( getCurrentTime, 10000 );
    // $( "#restaurantName").html(restaurantName);
    // $( "#location").html(restaurantLocation);
}
function timeSetter() {
    currentTime = moment().format( "HH:mm" );
    localStorage.setItem( "time", currentTime );
    clearTime = moment( currentTime, 'HH:mm:ss' ).add( -1, 'minutes' ).format( 'HH:mm' );
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
    $( "#loadingSplash" ).hide();
    $( ".jumbotron" ).show();
    $( "#instructions" ).show();

}
function getCurrentTime() {
    currentTime = moment().format( "HH:mm" );
    console.log( "time updated: " + currentTime );
    console.log( "time to clear: " + localStorage.getItem( 'clearTime' ) );
    if ( currentTime > clearTime ) {
        // waiting = false;
        console.log( "rate now" );
        // localStorage.getItem( 'waiting', waiting );
        $("#thumbs").show();
    }
}
function reset() {

}
function timeCheck() {
    currentTime = moment().format( "HH:mm" );
    localStorage.setItem( 'time', currentTime );
    if ( localStorage.getItem( 'time' ) > localStorage.getItem( "clearTime" ) ) {
        // waiting = false;
        // localStorage.setItem( 'waiting', waiting );
        $("#thumbs").show();

        return;
        
    }
    else {
        localStorage.setItem( 'waiting', true )
        setInterval( timeCheck, 1000 );
    }
}