$( function () {
    
    var path = appJSONPath;
    var productsData = '';
    $.getJSON( path, function(data) {
        productsData = data;
    }).done(function() {
        var template = Handlebars.compile( $('[data-script="products"]').html() );
        var html = template( productsData )
        $('[data-template="products"]').html(html);
    });
    
});