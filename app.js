var appJSONPath = '/resources/data/app.json';

function changePage( page )
{
    $('page').hide();
    $('[data-page="' + page + '"]').show();
}