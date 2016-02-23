$( function () {
    
    var path = appJSONPath;
    var carouselData = '';
    $.getJSON( path, function(data) {
        carouselData = data;
    }).done(function() {
        for( var page in carouselData.pages )
        {
            if( $('[data-page="' + page + '"]').find('[data-script="carousel"]').html() )
            {
                var template = Handlebars.compile( $('[data-page="' + page + '"]').find('[data-script="carousel"]').html() );
                var html = template( carouselData.pages[page] );
                $('[data-page="' + page + '"]').find('[data-template="carousel"]').html(html);
            }
        }
    });
});