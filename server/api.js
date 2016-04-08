// Here's where we'll define API routes for our server application. You can think of API
// routes like javascript functions, but over the internet. 

var fs = require('fs');
var SALES_DATA = JSON.parse(fs.readFileSync('../data/sales.json'));
var _ = require('underscore');

var people = SALES_DATA.salespeople;
var sales = SALES_DATA.sales;

// Helper function: Find the salesperson's name from the salespeople array by id
function findNameFromId(id) {
    for (var i = 0; i < people.length; ++i) {
        if (id == people[i].id) {
            return people[i].name;
        }
    }
}

// Helper function: Creates result object
function createNewResult() {
    var result = { 
        totalSales: 0, 
        totalAmount: 0,
        sales: [ ]
    };
    return result;
}

// Helper function: Add a single sale to results
function addSaleToResult(sale, result) {
    var obj = { };
    obj.id = sale.salespersonId;
    obj.name = findNameFromId(sale.salespersonId);
    obj.amount = sale.amount;
    obj.date = sale.date;
    obj.client = sale.client;
    result.sales.push(obj);
    result.totalSales += 1;
    result.totalAmount += sale.amount;
}

// Helper function: Replaces underscores with spaces
function replaceUnderScr(clientName) {
    return clientName.replace(/_/g, " ");
}

// Helper function: Sort by date (ascending)
function sortByDate(sales) {
    sales.sort(function (a, b) {
        var aDate = new Date(a.date);
        var bDate = new Date(b.date);
        return aDate - bDate;
    });
}

// Helper Function: Find median value
function median(values) {
    values.sort(function(a, b) {
        return a - b;
    });
    var half = Math.floor(values.length / 2);
    if(values.length % 2) {
        return values[half];
    }
    else {
        return (values[half - 1] + values[half]) / 2.0;
    }
}

module.exports = function(app) {

    // This route defines a method to get information for all the salespeople in
    // the system.
    app.get('/api/salespeople', function(req, res) {
        // Create a list of all the salespeople's names to send back to the client.
        console.log("Client requested names of salespeople...");
        var result = {
            salespeople: [ ]
        };
        for (var i = 0; i < people.length; ++i) {
            var obj = { };
            obj.id = people[i].id;
            obj.name = people[i].name;
            result.salespeople.push(obj);
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
    app.get('/api/salespersonInfo/:id', function(req, res) {
        var id = req.params.id;
        console.log("Client requested information for salesperson: " + id + "...");
    
        // Your job...
        // Get information on the salesperson with the matching id. 
        // - If a matching salesperson is found, send their info along with the status code 200.
        // - If there is no salesperson matching the id, send an error message
        //   along with status code 404
        var result = { };
        for (var i = 0; i < people.length; ++i) {
            if (id == people[i].id) {
                result.id = people[i].id;
                result.name = people[i].name;
                result.phone = people[i].phone;
                result.email = people[i].email;
                break;
            }
        }
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // return all sales
    app.get('/api/sales', function(req, res) {
        console.log("Client requested information on all sales...")
        var result = createNewResult();
        for (var i = 0; i < sales.length; ++i) {
            addSaleToResult(sales[i], result);
        }
        sortByDate(result.sales);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // returns sales by salespersonId
    app.get('/api/salesByPerson/:salespersonId', function(req, res) {
        var salespersonId = req.params.salespersonId;
        console.log("Client requested information on sales made by salesperson: " + salespersonId + "...");
        var result = createNewResult();
        for (var i =  0; i < sales.length; ++i) {
            if (salespersonId == sales[i].salespersonId) {
                addSaleToResult(sales[i], result);
            }
        }
        sortByDate(result.sales);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // returns sales to client
    app.get('/api/salesToClient/:clientName', function(req, res) {
        var client = replaceUnderScr(req.params.clientName);
        console.log("Client requested information on sales made to client: " + client + "...");
        var result = createNewResult();
        for (var i = 0; i < sales.length; ++i) {
            if (client == sales[i].client) {
                addSaleToResult(sales[i], result);
            }
        }
        sortByDate(result.sales);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // returns sales by date (ascending)
    app.get('/api/salesInDateRange/:start/:end', function(req, res) {
        var startDate = new Date(req.params.start);
        var endDate = new Date(req.params.end);
        console.log("Client requested information on sales made in date range: " + startDate + " - " + endDate);
        var result = createNewResult();
        for (var i = 0; i < sales.length; ++i) {
            var date = new Date(sales[i].date);
            if (startDate <= date && date <= endDate) {
                addSaleToResult(sales[i], result);
            }
        }
        sortByDate(result.sales);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // Returns list of clients by amount of sales (descending)
    app.get('/api/clients/', function (req, res) {
        console.log("Client requested sales made to clients...");
        var seen = { };
        var result = { 
            clients: [ ] 
        };
        for (var i = 0; i < sales.length; ++i) {
            var client = sales[i].client;
            if (seen[client] == undefined) {
                seen[client] = 1;
            }
            else {
                seen[client] += 1;
            }
        }
        for (var key in seen) {
            result.clients.push({
                client: key,
                totalSales: seen[key]
            });
        }
        result.clients.sort(function (a, b) {
            return b.totalSales - a.totalSales;
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // Returns list of salespeople by total $ from sales (descending)
    app.get('/api/salespeopleRanking/', function(req, res) {
        console.log("Client requested profits by salespeople...");
        var seen = { };
        var result = { 
            salespeople: [ ] 
        };
        for (var i = 0; i < sales.length; ++i) {
            var salespersonId = sales[i].salespersonId;
            if (seen[salespersonId] == undefined) {
                seen[salespersonId] = sales[i].amount;
            }
            else {
                seen[salespersonId] += sales[i].amount;
            }
        }
        for (var key in seen) {
            result.salespeople.push({
                salesperson: key,
                totalAmount: seen[key]
            });
        }
        result.salespeople.sort(function (a, b) {
            return b.totalAmount - a.totalAmount;
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // Return list of clients by total $ from sales (descending)
    app.get('/api/clientRanking/', function (req, res) {
        console.log("Client requested profits made from clients...");
        var seen = { };
        var result = {
            clients: [ ]
        };
        for (var i = 0; i < sales.length; ++i) {
            var client = sales[i].client;
            if (seen[client] == undefined) {
                seen[client] = sales[i].amount;
            }
            else {
                seen[client] += sales[i].amount;
            }
        }
        for (var key in seen) {
            result.clients.push({
                client: key,
                totalAmount: seen[key]
            });
        }
        result.clients.sort(function (a, b) {
            return b.totalAmount - a.totalAmount;
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(result));
    });

    // Returns a salespersons stats
    app.get('/api/salespersonStats/:salespersonId', function (req, res) {
        var salespersonId = req.params.salespersonId;
        console.log("Client requested stats of salesperson: " + salespersonId + "...");
        var obj = { 
            salespersonId: undefined,
            name: undefined,
            totalSales: 0,
            totalIncome: 0
        };
        var arrayMedian = [ ];
        for (var i = 0; i < sales.length; ++i) {
            if (salespersonId == sales[i].salespersonId) {
                obj.salespersonId = sales[i].salespersonId;
                obj.name = findNameFromId(sales[i].salespersonId);
                obj.totalSales += 1;
                obj.totalIncome += sales[i].amount;
                arrayMedian.push(sales[i].amount);
            }
        }
        obj.avgSale = Math.round(obj.totalIncome / obj.totalSales);
        obj.median = median(arrayMedian);
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(obj));
    });
};
































