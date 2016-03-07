var fs = require('fs');
// Read in the data from our data file and parse it into a Javascript object
var SALES_DATA = JSON.parse(fs.readFileSync('../sales.json'));

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
    // Print the results, one name per line
    var people = SALES_DATA.salespeople;
    for (var i = 0; i < people.length; ++i) {
        console.log(people[i].name);
    }
};



// 2)
// This function should print information about the salesperson named 'name'
// Specifically, their name, email and phone number
// e.g.
//     id: 'jdonaldson', name: 'Justin', email: 'jdonaldson@salesforce.com', phone: '1234567890'
function salespersonInfo(name, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
}



// 3)
// This function should print a list of the names of all the clients that 
// were sold to.
// e.g.
//      Wal-Mart
//      Microsoft
//      State Farm Insurance
//      ...
function clients(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 4)
// This function should print a list of all sales made, and then print both the
// total number of sales and the the total amount.
// e.g.
// {
//    salesperson: "gpascale" date: "1/1/2015", amount: 10000, client "Acme, Inc"
//    salesperson: "gpascale" date: "1/12/2015", amount: 7000, client "Acme, Inc"
//    salesperson: "gpascale" date: "1/29/2015", amount: 12000, client "Acme, Inc"
//    totalSales: 3
//    totalAmount: 20000
// }
function sales(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 5)
// Same as sales, but only include sales made by the sales person with id "salespersonId"
function salesByPerson(salespersonId, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 6)
// Same as sales, but only include sales made to the client named "clientName"
function salesToClient(clientName, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 7)
// Same as sales, but only include sales made between startDate and endDate.
function salesInDateRange(startDate, endDate, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 8)
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



// 9)
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
            expArgs = [ 'date', 'date' ];
            break;
        case 'help':
            fn = printHelp;
            expArgs = [ ];
            break;
        case 'exit':
            console.log('wee');
            process.exit(0);
    }
    if (!fn) {
        console.error("Invalid command! Type 'help' for a list of valid commands");
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
    console.log('salespersonInfo <salespersonId> - print information about the salesperson with id <salespersonId>');
    console.log('sales - print a list of all sales and also the total amount');
    console.log('salesByPerson <salespersonId> - print a list of all sales made by the salesperson with id <salespersonId>');
    console.log('salesToClient <client> - print a list of all sales made to <client>');
    console.log('salesInDateRange <startDate> <endDate> - print a list of all sales made between <startDate> and <endDate>');
    console.log('salespersonRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('clientRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('salespersonStats <salespersonId> - print some stats about the performance of the salesperson with id <salespersonId>')
    console.log('help - print this message\n');
}