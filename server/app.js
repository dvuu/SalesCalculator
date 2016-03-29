// This is the entry point to our server app. All it does is create an express server
// and tell it to listen on port 5000.

// The actual API routes are defined in api.js

var express = require("express");
var app = express();
var api = require('./api.js')(app);

console.log(__dirname + '/../web-client');
app.use(express.static(__dirname + '/../web-client'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("App listening on " + port);
});
