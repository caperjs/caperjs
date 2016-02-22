$( function () {
    
    var data = {
        title : 'Noctemis Reborn',
        subTitle : 'A 2D Horror/Puzzle/Adventure Game for PC, Mac and Linux'
    }
    
    var template = Handlebars.compile( $('[data-script="hero"]').html() );
    var html = template( data );
    $('[data-template="hero"]').html(html);
    
    var path = appJSONPath;
    var heroData = '';
    $.getJSON( path, function(data) {
        heroData = data;
    }).done(function() {
        var template = Handlebars.compile( $('[data-script="hero"]').html() );
        var html = template( heroData );
        $('[data-template="hero"]').html(html);
    });
});