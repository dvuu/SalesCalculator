// Here's where we'll define API routes for our server application. You can think of API
// routes like javascript functions, but over the internet. 

var fs = require('fs');
var SALES_DATA = JSON.parse(fs.readFileSync('data/sales.json'));
var _ = require('underscore');

module.exports = function(app) {

    // This route defines a method to get information for all the salespeople in
    // the system.
    app.get('/api/salespeople', function(req, res) {
        // Create a list of all the salespeople's names to send back to the client.
        var result = [ ];
        for (var i = 0; i < SALES_DATA.salespeople.length; ++i) {
            result.push(SALES_DATA.salespeople[i].name);
        }
        // First, we write the response headers.
        // HTTP requests have status codes which indicate success, failure, or sometimes
        // other situations such as a redirect or authentication error.
        // For your purposes, we only care about 200 (success) and 404 (error).
        // We also set a header called Content-Type to tell the caller that the response
        // is JSON data
        res.writeHead(200, {'Content-Type': 'application/json'});
        // Send the data as a JSON string
        res.end(JSON.stringify(result));
    });

    // Routes can take parameters just like javascript functions. In this case,
    // we're defining a route to return information about a specific salesperson,
    // and that person is specified via a parameter representing their id.
    app.get('/api/salespersonInfo/:salespersonId', function(req, res) {
        var id = req.params.salespersonId;
        console.log("Client requested information for salesperson: " + id + "...");
    
        // Your job...
        // Get information on the salesperson with the matching id. 
        // - If a matching salesperson is found, send their info along with the status code 200.
        // - If there is no salesperson matching the id, send an error message
        //   along with status code 404

        // Take this out
        res.send("Not yet implemented");
    });

    // ... Fill out more routes here
};