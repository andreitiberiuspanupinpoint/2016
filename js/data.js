$.get( "data.html", function( data ) {
  $( ".skills-list" ).html( data );
  alert( "Load was performed." );
});
