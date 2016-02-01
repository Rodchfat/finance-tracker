$('#stock-lookup-form').on('ajax:before', function(event, data, status){
show_spinner();
});
$('#stock-lookup-form').on('ajax:after', function(event, data, status){
hide_spinner();
});
$('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
hide_spinner();
$('#stock-lookup-results').replaceWith(' ');
$('#stock-lookup-errors').replaceWith('Stock was not found.');
});