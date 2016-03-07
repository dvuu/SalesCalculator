// This is the client application. It's what the user of your application will use.
// It will talk to your server application over http

// Import the "request" module so we can talk to our server over http
var request = require('sync-request');

// The URL of our server application. We create a variable for this so that we
// could change our code to use a different server just by changing this value.
var SERVER_URL = 'http://localhost:3000';



/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Below are 8 functions that will print out various information about the sales people
 * and sales. I've filled out the first one. You will have to fill out the remaining 7
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// 1) Salespeople
// This function should return a list of all the salespeople (just their names)
// e.g.
//     Justin
//     Greg
//     Dylan
//     Anthony
exports.salespeople = function() {
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
// {
//     name: 'Justin',
//     email: 'jdonaldson@salesforce.com'
//     phone: '1234567890'
// }
exports.salespersonInfo = function(name, callback) {
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
exports.sales = function(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 4)
// Same as sales, but only include sales made by the sales person named "salespersonName"
exports.salesByPerson = function(salespersonName, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 5)
// Same as sales, but only include sales made to the client named "clientName"
exports.salesToClient = function(clientName, callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
};



// 6)
// Same as sales, but only include sales made between startDate and endDate.
exports.salesInDateRange = function(startDate, endDate, callback) {
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
exports.salespeopleRanking = function(callback) {
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
exports.clientRanking = function(callback) {
    console.log("Not yet implemented");
    /* * * * * * * * * * * * * * * * * * * * * * *
     *   I'M AN EMPTY FUNCTION. FILL ME OUT!!!   *
     * * * * * * * * * * * * * * * * * * * * * * */
}
