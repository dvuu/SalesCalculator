var fs = require('fs');
var request = require('sync-request');
var _ = require('underscore');

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Below are several functions that shoud print out various information about the sales people
 * and sales. I've filled out the first one. You will have to fill out the remaining 7.
 * These functions will automatically get called when the user types in the matching 
 * command in the prompt. You don't have to code that part - just these functions.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// The data is now returned from our server application which provides an API. This variable
// stores the url for that server, also called an endpoint. We know that all the API urls
// begin with the server url plus the string "/api".
var API_ENDPOINT = 'http://localhost:5000/api';

// 1) Salespeople
// Command: salespeople
// This function should print a list of all the salespeople (just their names)
// e.g.
//     Bob Smith
//     Sarah Jenkins
//     Isaac Peterson
//     ...
function salespeople() {
    var requestUrl = API_ENDPOINT + '/salespeople';
    console.log('requesting ' + requestUrl + '...');
    // Get salespeople data from the server
    var result = request('GET', requestUrl);
    try {
        // The response comes back as a string, but we know it is a JSON string,
        // so we can turn it into an object
        var result = JSON.parse(result.getBody('utf8'));
        // Loop over all the salespeople and print out each of their names
        
        // regular way
        for (var i = 0; i < result.salespeople.length; ++i) {
             console.log(result.salespeople[i].name);
        }

        // underscore way
        // _.each(result.salespeople, function(element) {
        //     console.log(element.name);
        // });
    }
    catch (err) {
        // If there was an error, display information about it
        console.log(err);
    }
}



// 2)
// This function should print information about the salesperson with id 'id'
// Specifically, their name, email and phone number
// e.g.
//     id: 'jdonaldson', name: 'Justin', email: 'jdonaldson@salesforce.com', phone: '1234567890'
function salespersonInfo(id) {
    // Get salespeople data from the server
    var requestUrl = API_ENDPOINT + '/salespersonInfo/' + id;
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var salesperson = JSON.parse(result.getBody('utf8'));
        for (var key in salesperson) {
            console.log(key + ": " + salesperson[key]);
        }

        // _.each(salesperson, function(val, key) {
        //     console.log(key + ': ' + val);
        // });
    }
    catch (err) {
        console.error(error);
    }
}



// 3)
// This function should print a list of all sales made, and then print both the
// total number of sales and the the total amount.
// e.g.
//    Bob Smith sold $10000 worth to Acme, Inc on 1/1/2015
//    Bob Smith sold $12000 worth to State Farm on 1/1/2015
//    Bob Smith sold $7000 worth to Amazon on 1/1/2015
//    totalSales: 3
//    totalAmount: 20000
function sales() {
    var requestUrl = API_ENDPOINT + '/sales';
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.sales.length; ++i) {
            console.log(result.sales[i].name + " sold $" + result.sales[i].amount + " worth to " + result.sales[i].client + " on " + result.sales[i].date + ".");
        }
        console.log("Total Sales: " + result.totalSales);
        console.log("Total Amount: $" + result.totalAmount);
    }
    catch (err) {
        console.log(err);
    }
}



// 4)
// Same as sales, but only include sales made by the sales person with id "salespersonId"
function salesByPerson(salespersonId) {
    var requestUrl = API_ENDPOINT + '/salesByPerson/' + salespersonId;
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.sales.length; ++i) {
            console.log(result.sales[i].name + " sold $" + result.sales[i].amount + " worth to " + result.sales[i].client + " on " + result.sales[i].date + ".");
        }
        console.log("Total Sales: " + result.totalSales);
        console.log("Total Amount: $" + result.totalAmount);
    }
    catch(err) {
        console.log(err);
    }
}



// 5)
// Same as sales, but only include sales made to the client named "clientName"
function salesToClient(clientName) {
    var requestUrl = API_ENDPOINT + '/salesToClient/' + clientName;
    console.log('reqeusting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.sales.length; ++i) {
            console.log(result.sales[i].name + " sold $" + result.sales[i].amount + " worth to " + result.sales[i].client + " on " + result.sales[i].date + ".");
        }
        console.log("Total Sales: " + result.totalSales);
        console.log("Total Amount: $" + result.totalAmount);
    }
    catch(err) {
        console.log(err);
    }
}



// 6)
// Same as sales, but only include sales made between startDate and endDate.
function salesInDateRange(startDate, endDate) {
    var requestUrl = API_ENDPOINT + '/salesInDateRange/' + startDate + '/' + endDate;
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.sales.length; ++i) {
            console.log(result.sales[i].name + " sold $" + result.sales[i].amount + " worth to " + result.sales[i].client + " on " + result.sales[i].date + ".");
        }
        console.log("Total Sales: " + result.totalSales);
        console.log("Total Amount: $" + result.totalAmount);
    }
    catch(err) {
        console.log(err);
    }
}



// 7)
// This function should print a list of the names of all the clients that 
// were sold to.
// e.g.
//      Wal-Mart
//      Microsoft
//      State Farm Insurance
//      ...
function clients() {
    var requestUrl = API_ENDPOINT + '/clients';
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.clients.length; ++i) {
            console.log(result.clients[i].client + ': ' + result.clients[i].totalSales + ' sales');
        }
    }
    catch(err) {
        console.log(err);
    }
}


// 8)
// Print a list of all the sales people and the total amounts they have sold,
// Bonus points - sort it from biggest amount to smallest.
// e.g.
//     avanpelt: $125000
//     gpascale: $100000
//     jdonaldson: $60000
//     ...
function salespeopleRanking() {
    var requestUrl = API_ENDPOINT + '/salespeopleRanking';
    console.log('reuqesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.salespeople.length; ++i) {
            console.log(result.salespeople[i].salesperson + ': $' + result.salespeople[i].totalAmount + ' sold');
        }
    }
    catch(err) {
        console.log(err);
    }
}



// 9)
// Print a list of all the clients we have sold to and the total amount sold to each
// Bonus points. Sort from biggest to smallest.
// e.g.
//     Acme, Inc: $100000
//     Salesforce.com: $80000
//     Microsoft: $60000
//     Whole Foods: $25000
function clientRanking() {
    var requestUrl = API_ENDPOINT + '/clientRanking';
    console.log('reuqesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var result = JSON.parse(result.getBody('utf8'));
        for (var i = 0; i < result.clients.length; ++i) {
            console.log(result.clients[i].client + ': $' + result.clients[i].totalAmount + ' bought');
        }
    }
    catch(err) {
        console.log(err);
    }
}



// 10)
// Print out some statistics about a particular salesperson. In particular
// their # of sales, total dollar amount of all sales, average sale amount,
// and median sale amount
// e.g.
//     # Sales: 43
//     Total $: 860000
//     Avg Sale $: 20000
//     Median Sale $: 56000
function salespersonStats(salespersonId) {
    var requestUrl = API_ENDPOINT + '/salespersonStats/' + salespersonId;
    console.log('requesting ' + requestUrl + '...');
    var result = request('GET', requestUrl);
    try {
        var salesperson = JSON.parse(result.getBody('utf8'));
        for (var key in salesperson) {
            console.log(key + ': ' + salesperson[key]);
        }
    }
    catch(err) {
        console.log(error);
    }
}




// Don't worry about code below this line. It runs the command prompt to accept input
// from the user and call the matching functions above.

// *******************************************************************************

var readline = require('readline-sync');
var _ = require('underscore');

while(1) {
    var line = readline.question('SalesCalculator > ');    
    var command = line.split(/\s+/).slice(0, 1)[0];
    var args = line.split(/\s+/).slice(1);
    var expArgs = [];
    var validCommand = true;
    var fn = undefined;
    switch(command) {
        case 'salespeople':
            fn = salespeople;
            expArgs = [ ];
            break;
        case 'sales':
            fn = sales;
            expArgs = [ ];
            break;
        case 'clients':
            fn = clients;
            expArgs = [ ];
            break;
        case 'salespeopleRanking': 
            fn = salespeopleRanking;
            expArgs = [ ];
            break;
        case 'clientRanking':
            fn = clientRanking;
            expArgs = [ ];
            break;
        case 'salespersonInfo': 
            fn = salespersonInfo;
            expArgs = [ 'string' ];
            break;
        case 'salesByPerson': 
            fn = salesByPerson;
            expArgs = [ 'string' ];
            break;
        case'salesToClient':
            fn = salesToClient;
            expArgs = [ 'string' ];
            break;
        case 'salesInDateRange':
            fn = salesInDateRange;
            expArgs = [ 'string', 'string' ];
            break;
        case 'salespersonStats':
            fn = salespersonStats;
            expArgs = [ 'string' ];
            break;
        case 'help':
            fn = printHelp;
            expArgs = [ ];
            break;
        case 'exit':
            process.exit(0);
    }
    if (!fn) {
        console.error("Invalid command! Type 'help' for a list of valid commands");
    }
    else if (!checkArgs(args, expArgs)) {
        console.error("Invalid arguments - Expected " + JSON.stringify(expArgs));
    }
    else {
        fn.apply(this, args);
    }    
}

function checkArgs(actual, expected) {
    var actualTypes = _.map(actual, function(x) { return typeof x; });
    return _.isEqual(actualTypes, expected);
}

function printHelp() {
    console.log("\nAvailable commands\n");
    console.log('salespeople - print the names of all salespeople');
    console.log('salespersonInfo <salespersonId> - print information about the salesperson with id <salespersonId>');
    console.log('sales - print a list of all sales and also the total amount');
    console.log('salesByPerson <salespersonId> - print a list of all sales made by the salesperson with id <salespersonId>');
    console.log('salesToClient <client> - print a list of all sales made to <client>');
    console.log('salesInDateRange <startDate> <endDate> - print a list of all sales made between <startDate> and <endDate>. (ex: 1-1-2015 12-1-2015)');
    console.log('salespersonRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('clientRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('salespersonStats <salespersonId> - print some stats about the performance of the salesperson with id <salespersonId>')
    console.log('help - print this message\n');
}
