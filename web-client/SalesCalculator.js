
// Because we include this code in the "head" section, it runs before the
// browser has fully rendered the page. jQuery's document ready will call
// the function we tell it to only after the page has finished rendering

$(document).ready(function() {
    $('#home').click(function(e) {
        location.reload();
    });

    $('.clearBtn').click(function(e) {
        fetchAndDisplaySales('/api/sales', 'All Sales');
    });

    buildSalesPeopleFilter();

    buildClientFilter();
    
    fetchAndDisplaySales('/api/sales', 'All Sales');
});

function createSalesList(result) {
    var $results = $('.results');
    $results.empty();
    var $salesList = $('<ul class="sales"></ul>');
    $results.append('<h4>Total Sales: ' + result.totalSales + '</h4>');
    $results.append('<h4>Total Amount: $' + result.totalAmount + '</h4>');
    _.each(result.sales, function(sale) {
        $salesList.append('<li>' + sale.name 
            + " sold $" + sale.amount 
            + " worth to " + sale.client 
            + " on " + sale.date 
            + "." + '</li>');
    });
    $results.append($salesList);
}

function fetchAndDisplaySales(url, title) {
    $('.chartTitle').empty();
    $.ajax({ url: url, success: function(result) {
        buildChartFromData(result);
        createSalesList(result);
        $('.chartTitle').append('<p>' + title + '</p>');
    }, error: function() {
        console.log("error");
    }});
}

function buildSalesPeopleFilter() {
    $('.salespeopleDropdown .dropdown-content').empty();
    $.ajax({ url: '/api/salespeople', success: function(result){
        _.each(result.salespeople, function(salesperson) {
            var $aTag = $('<a href="#">' + salesperson.name + '</a>');
            $aTag.attr('salespersonId', salesperson.id);
            $aTag.click(function(e) {
                var id = $(e.currentTarget).attr('salespersonId');
                var url = '/api/salesByPerson/' + id;
                fetchAndDisplaySales(url, 'Sales by ' + salesperson.name);
            });
            var $listItem = $('<div class="links"><div>');
            $listItem.append($aTag);
            $('.salespeopleDropdown .dropdown-content').append($listItem);
        });
    }, error: function() {
        console.log("error");
    }});
}

function buildClientFilter() {
    $('.clientsDropdown .dropdown-content').empty();
    $.ajax({ url: 'api/clients', success: function(result) {
        _.each(result.clients, function(client) {
            var $aTag = $('<a href="#">' + client.client + '</a>');
            $aTag.click(function(e) {
                var clientName = $(e.currentTarget).text();
                var url = '/api/salesToClient/' + clientName;
                fetchAndDisplaySales(url, 'Sales to ' + clientName);
            });
            var $listItem = $('<div class="filter"><div>');
            $listItem.append($aTag);
            $('.clientsDropdown .dropdown-content').append($listItem);
        });
    }, error: function() {
        console.log("error");
    }});
}




























