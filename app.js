var appJSONPath = '/resources/data/app.json';
var currentPage = '';

function changePage( page )
{
    $('page').hide();
    $('[data-page="' + page + '"]').show();
    currentPage = page;
    $('[data-navigation]').removeClass('active');
    $('[data-navigation="' + page + '"]').addClass('active');
}