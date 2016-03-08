/*--Carousel--*/
$.get( "/app/templates/carousel/carousel.handlebars", function( data ) {
    $('carousel').append( data );
});

/*--Content--*/
$.get( "/app/templates/content/content.handlebars", function( data ) {
    $('content').append( data );
});

/*--Feed--*/
$.get( "/app/templates/feed/feed.handlebars", function( data ) {
    $('feed').append( data );
});

/*--Hero--*/
$.get( "/app/templates/hero/hero.handlebars", function( data ) {
    $('hero').append( data );
});

/*--Navbar--*/
$.get( "/app/templates/navbar/navbar.handlebars", function( data ) {
    $('navbar').append( data );
});

/*--Products--*/
$.get( "/app/templates/products/products.handlebars", function( data ) {
    $('products').append( data );
});

/*--Social--*/
$.get( "/app/templates/social/social.handlebars", function( data ) {
    $('social').append( data );
});