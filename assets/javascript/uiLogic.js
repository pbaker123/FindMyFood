var page = 1;
var rated;
var use;

$( document ).ready( function () {
    console.log( "ready!" );
    $( "#restaurantChoice" ).hide();


    // $( "#loadingSplash" ).hide();
    // $( "#iconPage" ).hide();
    // $( "#pageChoice" ).hide();
    // $( "#instructions" ).show();


    console.log( "UI engaged" );


    $( "#start" ).on( "click", function () {
        hideAll();
        $( "#loadingSplash" ).show();
        debugger;
        setTimeout( page2, 1000 );

    } );

    $( ".content" ).on( "click", function () {
        hideAll();
        setTimeout(page3,100);
    } );
} );

function hideAll() {
    $( ".jumbotron" ).hide();
    $( "#pageChoice" ).hide();
    $( "#iconPage" ).hide();
    $( "#instructions" ).hide();
    $( "#loadingSplash" ).show();

}

function page3() {
    $( ".jumbotron" ).show();
    $( "#loadingSplash" ).hide();
    $( "#iconPage" ).hide();
    $( "#restaurantChoice" ).show();
}
function page2() {

    $( "#loadingSplash" ).hide();
    $( ".jumbotron" ).show();
    console.log( "start pressed" );
    page++;
    $( "#instructions" ).hide();
    $( "#pageChoice" ).show();
    $("#restaurantChoice").hide();
}
