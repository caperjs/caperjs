$( function () {
    
    var path = appJSONPath;
    var socialData = '';
    $.getJSON( path, function(data) {
        socialData = data;
    }).done(function() {
        var template = Handlebars.compile( $('[data-script="social"]').html() );
        var html = template( socialData )
        $('[data-template="social"]').html(html);
    });
    
});