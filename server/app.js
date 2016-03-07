var express = require("express")
var app = GLOBAL.app = express();
var api = require('./api.js');

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("SalesCalculator listening on " + port);
});
