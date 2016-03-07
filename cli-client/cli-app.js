// Import the "request" module so we can talk to our server over http
var request = require('sync-request');

// The URL of our server application. We create a variable for this so that we
// could change our code to use a different server just by changing this value.
var SERVER_URL = 'http://localhost:3000';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Below are 8 functions that shoud print out various information about the sales people
 * and sales. I've filled out the first one. You will have to fill out the remaining 7.
 * These functions will automatically get called when the user types in the matching 
 * command in the prompt. You don't have to code that part - just these functions.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// 1) Salespeople
// Command: salespeople
// This function should return a list of all the salespeople (just their names)
// e.g.
//     Bob Smith
//     Sarah Jenkins
//     Isaac Peterson
//     ...
function salespeople() {
    // Make a request to get the list of salespeople
    var salespeopleUrl = SERVER_URL + '/salespeople';
    var httpResponse = request('GET', salespeopleUrl);
    // Convert the response from a string to a Javascript object
    var names = JSON.parse(httpResponse.getBody(), 'utf8');
    // Print the results, one name per line
    for (var i = 0; i < names.length; ++i) {
        console.log(names[i]);
    }
};

// 2)
// This function should print information about the salesperson named 'name'
// Specifically, their name, email and phone number
// e.g.
//     name: 'Justin', email: 'jdonaldson@salesforce.com', phone: '1234567890'
function salespersonInfo(name, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
}



// 3)
// This function should print a list of all sales made, and then print the total amount.
// e.g.
//    salesperson: "Greg" date: "1/1/2015", amount: 10000, client "Acme, Inc"
//    salesperson: "Greg" date: "1/12/2015", amount: 7000, client "Acme, Inc"
//    salesperson: "Greg" date: "1/29/2015", amount: 12000, client "Acme, Inc"
//    total: 20000
function sales(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 4)
// Same as sales, but only include sales made by the sales person named "salespersonName"
function salesByPerson(salespersonName, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 5)
// Same as sales, but only include sales made to the client named "clientName"
function salesToClient(clientName, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 6)
// Same as sales, but only include sales made between startDate and endDate.
function salesInDateRange(startDate, endDate, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
 };



// 7)
// Print a list of all the sales people and the amounts they have sold, sorted from biggest
// amount to smallest.
// e.g.
//     Anthony: 125000
//     Greg: 100000
//     Dylan: 60000
//     Justin: 30000
function salespeopleRanking(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
}



// 8)
// Print a list of all the clients we have sold to and the total amount sold to each
// from biggest to smallest.
// e.g.
//     Acme, Inc: 100000
//     Salesforce.com: 80000
//     Microsoft: 60000
//     Whole Foods: 25000
function clientRanking(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
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
        case 'sales':
            fn = sales;
            expArgs = [ ];
        case 'salespeopleRanking': 
            fn = salespeopleRanking;
            expArgs = [ ];
        case 'clientRanking':
            fn = clientRanking;
            expArgs = [ ];
        case 'salespersonInfo': 
            fn = salespersonInfo;
            expArgs = [ 'string' ];
        case 'salesByPerson': 
            fn = salesByPerson;
            expArgs = [ 'string' ];
        case'salesToClient':
            fn = salesToClient;
            expArgs = [ 'string' ];
        case 'salesInDateRange':
            fn = salesInDateRange;
            expArgs = [ 'date', 'date' ];
        case 'help':
            fn = printHelp;
            expArgs = [ ];
            break;
        case 'exit':
            process.exit(0);
    }
    if (!fn) {
        console.error("Invalid command!");
    }
    else if (!checkArgs(args, expArgs)) {
        console.error("Invalid arguments - Expected " + JSON.stringify(expArgs));
    }
    else {
        fn();
    }
}

function checkArgs(actual, expected) {
    var actualTypes = _.map(actual, function(x) { return typeof x; });
    return _.isEqual(actualTypes, expected);
}

function printHelp() {
    console.log("\nAvailable commands\n");
    console.log('salespeople - print the names of all salespeople');
    console.log('salespersonInfo <person> - print information about the salesperson <person>');
    console.log('sales - print a list of all sales and also the total amount');
    console.log('salesByPerson <person> - print a list of all sales made by <person>');
    console.log('salesToClient <person> - print a list of all sales made to <client>');
    console.log('salesInDateRange <startDate> <endDate> - print a list of all sales made between <startDate> and <endDate>');
    console.log('salespersonRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('clientRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('help - print this message\n');
}
