
// Because we include this code in the "head" section, it runs before the
// browser has fully rendered the page. jQuery's document ready will call
// the function we tell it to only after the page has finished rendering

$(document).ready(function() {
    // Wire up the submit button to do something when clicked...
    $('.salespeopleLink').click(function(e) {
        displaySalespeople();
    });
});

$(document).ready(function() {
    $('.salesLink').click(function(e) {
        displaySales();
    });
});

function displaySalespeople() {
    $('.results').empty();
    // Make a request to get the salespeople data
    $.ajax({ url: '/api/salespeople', success: function(result){
        // Create a new html list to display the data
        var salespeopleList = $('<ul class="salespeople"></ul>');
        // One by one, add a list element to the list for each salesperson
        
        // for (var i = 0; i < result.salespeople.length; ++i) {
        //     salespeopleList.append('<li>' + result.salespeople[i].name + '</li>');
        // }

        _.each(result.salespeople, function(salesperson) {
            salespeopleList.append('<li>' + salesperson.name + '</li>');
        });

        // Add the list to the page inside the "results" element
        $('.results').append(salespeopleList);
    }, error: function() {
        console.log("error");
    }});
}

function displaySales() {
    $('.results').empty();
    $.ajax({ url: '/api/sales', success: function(result) {
        var $results = $('.results');
        var salesList = $('<ul class="sales"></ul>');
        // _.each(result, function(val, key) {
        //     salesList.append('<li>' + key + ': ' + val + '</li>');
        // });
        $results.append('<h4>' + 'Total Sales: ' + result.totalSales + '</h4>');
        $results.append('<h4>' + 'Total Amount: ' + result.totalAmount + '</h4>');
        _.each(result.sales, function(sales) {
            salesList.append('<li>' + '<a href="#">' + sales.name + '</a>' + " sold $" + sales.amount + " worth to " + sales.client + " on " + sales.date + "." + '</li>');
        });
        $('.results').append(salesList);
    }, errpr: function() {
        console.log("error");
    }});
}