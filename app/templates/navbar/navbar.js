$( function () {
    
    var path = appJSONPath;
    var navbarData = '';
    $.getJSON( path, function(data) {
        navbarData = data;
    }).done(function() {
        var template = Handlebars.compile( $('[data-script="navbar"]').html() );
        var html = template( navbarData )
        $('[data-template="navbar"]').html(html);
    });
    
});