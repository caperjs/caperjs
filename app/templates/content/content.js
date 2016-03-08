$( function () {
    
    var path = appJSONPath;
    var contentData = '';
    $.getJSON( path, function(data) {
        contentData = data;
    }).done(function() {
        for( var page in contentData.pages )
        {
            if( $('[data-page="' + page + '"]').find('[data-script="content"]').html() )
            {
                var template = Handlebars.compile( $('[data-page="' + page + '"]').find('[data-script="content"]').html() );
                var html = template( contentData.pages[page] );
                $('[data-page="' + page + '"]').find('[data-template="content"]').html(html);
            }
        }
    });
    
});