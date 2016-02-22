$( function () {
    
    var data = [
        {
            title : 'Updates',
            articles : [
                {
                    title : 'February 10th 12:05am',
                    images : [
                        { image : '/resources/images/updates/feb10/am/1.png' },
                        { image : '/resources/images/updates/feb10/am/2.png' },
                        { image : '/resources/images/updates/feb10/am/3.png' },
                        { image : '/resources/images/updates/feb10/am/4.png' }
                    ],
                    description: 'In game art style finally finished. Working Demo level shown'
                }
            ]
        }
    ];
    
    var template = Handlebars.compile( $('[data-script="feed"]').html() );
    var html = template( data )
    $('[data-template="feed"]').html(html);
});