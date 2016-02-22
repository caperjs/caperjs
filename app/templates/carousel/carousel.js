$( function () {
    
    var data = [
        { image : 'https://cdn.shopify.com/s/files/1/0249/6470/products/noctemis-0_1024x1024.jpeg?v=1374085965', caption : 'Noctemis' },
        { image : 'https://1.bp.blogspot.com/-Rg6nWqemUsk/UhsMpAm-HnI/AAAAAAAAAdM/Q_Z5-9GAfbI/s1600/1_noctemis.jpg', caption : 'Noctemis' }
    ];
    
    var template = Handlebars.compile( $('[data-script="carousel"]').html() );
    var html = template( data )
    $('[data-template="carousel"]').html(html);
});