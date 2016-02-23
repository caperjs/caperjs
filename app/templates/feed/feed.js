$( function () {
    
    var path = appJSONPath;
    var feedData = '';
    $.getJSON( path, function(data) {
        feedData = data;
    }).done(function() {
        for( var page in feedData.pages )
        {
            if( $('[data-page="' + page + '"]').find('[data-script="feed"]').html() )
            {
                var template = Handlebars.compile( $('[data-page="' + page + '"]').find('[data-script="feed"]').html() );
                var html = template( feedData.pages[page] );
                $('[data-page="' + page + '"]').find('[data-template="feed"]').html(html);
            }
        }
    });
    
});