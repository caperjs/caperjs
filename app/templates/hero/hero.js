$( function () {
    
    var path = appJSONPath;
    var heroData = '';
    $.getJSON( path, function(data) {
        heroData = data;
    }).done(function() {
        for( var page in heroData.pages )
        {
            if( $('[data-page="' + page + '"]').find('[data-script="hero"]').html() )
            {
                var template = Handlebars.compile( $('[data-page="' + page + '"]').find('[data-script="hero"]').html() );
                var html = template( heroData.pages[page] );
                $('[data-page="' + page + '"]').find('[data-template="hero"]').html(html);
            }
        }
    });
    
});