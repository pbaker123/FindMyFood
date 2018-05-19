var page = 1;
var rated;
var use;
$( document ).ready( function () {
    console.log( "ready!" );


    $( "#loadingSplash" ).hide();
    $( "#iconPage" ).hide();
    $( "#pageChoice" ).hide();
    $( "#instructions" ).show();


    console.log( "UI engaged" );


    $( "#start" ).on( "click", function () {
        page2();

    } );

    $( "#iconPage" ).on( "click", function () {
        page3();
    } );
} );

function page3() {
    $("#loadingSplash").hide();
    $( "#iconPage" ).hide();
    $( "#pageChoice" ).show();
}
function page2() {
    $("#loadingSplash").hide();
    console.log( "start pressed" );
    page++;
    $( "#instructions" ).hide();
    $( "#iconPage" ).show();
}
