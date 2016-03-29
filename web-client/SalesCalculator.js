
// Because we include this code in the "head" section, it runs before the
// browser has fully rendered the page. jQuery's document ready will call
// the function we tell it to only after the page has finished rendering

$(document).ready(function() {
    // Wire up the submit button to do something when clicked...
    $('.salespeopleLink').click(function(e) {
        displaySalespeople();
    });
});

function displaySalespeople() {
    // Make a request to get the salespeople data
    $.ajax({ url: '/api/salespeople', success: function(result){
        // Create a new html list to display the data
        var salespeopleList = $('<ul class="salespeople"></ul>');
        // One by one, add a list element to the list for each salesperson
        _.each(result, function(salesperson) {
            salespeopleList.append('<li>' + salesperson + '</li>');
        });
        // Add the list to the page inside the "results" element
        $('.results').append(salespeopleList);
    }, error: function() {
        console.log("error");
    }});
}