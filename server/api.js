var fs = require('fs');

// Read in the data from our data file and parse it into a Javascript object
var data = JSON.parse(fs.readFileSync('sales.json'));

// app is the express application object. The GLOBAL is used because it is defined in
// app.js - don't worry about how that works right now.
var app = GLOBAL.app;



// Below, we'll define a bunch of URL routes that clients can call to interact with
// our server side application. In the case of this application, they all return various
// sales data.
// You can interact with this server application via curl, a web browser, or the client
// application which you'll also be writing. Ultimatly, all of these will communicate with
// the server over http.
// Try CURLing the url http://localhost:3000/helloWorld, which is defined below.
app.get(['/helloWorld'], function(req, res) {
    res.send('Hello world!\n');
})

// Define an HTTP route to return the names of all salespeople.
// A Client can call this method by making a request to http://<server url>/salespeople
//
// To test this function, you can hit the following url either through CURL
// or in a browser.
// http://localhost:3000/salespeople
app.get(['/salespeople'], function(req, res) {
    // Create an array to contain the result
    var result = [ ];
    // Loop over all the salespeople and add each name to the result
    for (var i = 0; i < data.salespeople.length; ++i) {
        result.push(data.salespeople[i].name);
    }
    // Result is created. Send it back to the client!
    res.send(result);
});

// Here's how you can define a route which takes a parameter. In this case,
// I've defined a route called sales which takes the name of the salesperson
// as a parameter. You should fill it in to return the list of sales by that person.
//
// To test this function, you can hit the following url either through CURL
// or in a browser.
// http://localhost:3000/sales/greg (replace greg with any name)
app.get(['/sales/:person'], function(req, res) {
    console.log("get sales by " + req.params.person);
    var result = [ ];

    /* * * * * * * * * * * * * * * * * * * * * * *
     *              FILL ME OUT!!!               *
     * * * * * * * * * * * * * * * * * * * * * * */

    res.send(result);
});


// I've only defined two routes above. You'll need more to finish this project,
// so define them here!
// ...
// ...
// ...

