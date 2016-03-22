var fs = require('fs');
// Read in the data from our data file and parse it into a Javascript object
var SALES_DATA = JSON.parse(fs.readFileSync('data/sales.json'));

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Below are several functions that shoud print out various information about the sales people
 * and sales. I've filled out the first one. You will have to fill out the remaining 7.
 * These functions will automatically get called when the user types in the matching 
 * command in the prompt. You don't have to code that part - just these functions.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


// 1) Salespeople
// Command: salespeople
// This function should print a list of all the salespeople (just their names)
// e.g.
//     Bob Smith
//     Sarah Jenkins
//     Isaac Peterson
//     ...
function salesPeople() {
    // Print the results, one name per line
    var people = SALES_DATA.salespeople;
    for (var i = 0; i < people.length; ++i) {
        console.log(people[i].name);
    }
}



// 2)
// This function should print information about the salesperson named 'name'
// Specifically, their name, email and phone number
// e.g.
//     id: 'jdonaldson', name: 'Justin', email: 'jdonaldson@salesforce.com', phone: '1234567890'
function salesPersonInfo(id) {
    var people = SALES_DATA.salespeople;
    for (var i = 0; i < people.length; ++i) {
        if (id == people[i].id) {
            console.log("id: " + people[i].id);
            console.log("name: " + people[i].name);
            console.log("email: " + people[i].email);
            console.log("phone: " + people[i].phone);
            break;
        }
    }
}



// Helper function: Find the salesperson's name from the salespeople array by id
function findNameFromId(id) {
    var people = SALES_DATA.salespeople;
    for (var i = 0; i < people.length; ++i) {
        if (id == people[i].id) {
            return people[i].name;
        }
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
    var sales = SALES_DATA.sales;
    var totalIncome = 0;
    for (var i = 0; i < sales.length; ++i) {
        var name = findNameFromId(sales[i].salespersonId);
        var amount = sales[i].amount;
        var client = sales[i].client;
        var date = sales[i].date;
        totalIncome += amount;
        console.log(name + " sold $" + amount + " worth to " + client + " on " + date + ".");
    }
    console.log("Total sales: " + i);
    console.log("Total amount: " + totalIncome);
}



// 4)
// Same as sales, but only include sales made by the sales person with id "salespersonId"
function salesByPerson(salespersonId) {
    var sales = SALES_DATA.sales;
    var count = 0;
    var totalIncome = 0;
    for (var i = 0; i < sales.length; ++i) {
        if (salespersonId == sales[i].salespersonId) {
            var name = findNameFromId(salespersonId);
            var amount = sales[i].amount;
            var client = sales[i].client;
            var date = sales[i].date;
            count += 1;
            totalIncome += amount;
            console.log(name + " sold $" + amount + " worth to " + client + " on " + date + ".");
        }
    }
    console.log("Total sales: " + count);
    console.log("Total amount: " + totalIncome);
}



// Replaces underscores with spaces
function replaceUnderScr(clientName) {
    
    // solution #1
    return clientName.replace(/_/g, " ");

    // solution #2
    // return clientName.split("_").join(" ");
    
    // solution #3
    // while (clientName.includes("_")) {
    //     clientName = clientName.replace("_", " ");
    // }
    return clientName;
}



// 5)
// Same as sales, but only include sales made to the client named "clientName"
function salesToClient(clientName) {
    clientName = replaceUnderScr(clientName);
    var sales = SALES_DATA.sales;
    var count = 0;
    var totalIncome = 0;
    for (var i = 0; i < sales.length; ++i) {
        if(clientName == sales[i].client) {
            var name = findNameFromId(sales[i].salespersonId);
            var amount = sales[i].amount;
            var client = sales[i].client;
            var date = sales[i].date;
            count += 1
            totalIncome += amount;
            console.log(name + " sold $" + amount + " worth to " + client + " on " + date + ".");
        }
    }
    console.log("Total sales: " + count);
    console.log("Total amount: " + totalIncome);
}



// 6)
// Same as sales, but only include sales made between startDate and endDate.
function salesInDateRange(start, end) {
    var sales = SALES_DATA.sales;
    var startDate = new Date(start);
    var endDate = new Date(end);
    var count = 0;
    var totalIncome = 0;
    var arrayToPrint = [ ];
    console.log("Sales from " + start + " to " + end + ":");
// create new array to sort
    for (var i = 0; i < sales.length; ++i) {
        var date = new Date(sales[i].date);
        if(startDate <= date && date <= endDate) {
            arrayToPrint.push(sales[i]);
        }
    }
// Sort by date in ascending order
    arrayToPrint.sort(function (a, b) {
        var aDate = new Date(a.date);
        var bDate = new Date(b.date);
        if (aDate < bDate) {
            return -1;
        } 
        else if (bDate < aDate) {
            return 1;
        }
        else {
            return 0;        
        }
    });

    for (var i = 0; i < arrayToPrint.length; ++i) {
        var name = findNameFromId(arrayToPrint[i].salespersonId);
        var amount = arrayToPrint[i].amount;
        var client = arrayToPrint[i].client;
        var date = arrayToPrint[i].date;
        count += 1;
        totalIncome += amount;
        console.log(name + " sold $" + amount + " worth to " + client + " on " + date + ".");
    }
    console.log("Total sales: " + count);
    console.log("Total amount: " + totalIncome);
}



// 7)
// This function should print a list of the names of all the clients that 
// were sold to and the # of sales made to them
// e.g.
//      Wal-Mart: 7
//      Microsoft: 4
//      State Farm Insurance: 10
//      ...
function clients() {
    var sales = SALES_DATA.sales;
    var seen = { };
    var salesArray = [ ];
    for (var i = 0; i < sales.length; ++i) {
        var client = sales[i].client;
        if (seen[client] == undefined) {
            seen[client] = 1;
        } 
        else {
            seen[client] += 1;
        }
        // console.log('i = ' + i + '  client = ' + client);
        // console.log(seen);
        // if (i == 20)
        //    break;
    }

    for (var j in seen) {
        salesArray.push({ client: j, totalSales: seen[j] });
    }

    salesArray.sort(function (a, b) {
        return b.totalSales - a.totalSales;
    });

    console.log("Clients and number of sales: ");
    for (var k = 0; k < salesArray.length; ++k) {
        console.log(salesArray[k].client + ": " + salesArray[k].totalSales);
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
function salesPersonRanking() {
    var sales = SALES_DATA.sales;
    var amountsPerId = { };
    var arrayToPrint = [ ];

    for (var i = 0; i < sales.length; ++i) {
        var id = sales[i].salespersonId;
        if (amountsPerId[id] == undefined) {
            amountsPerId[id] = sales[i].amount;
        } 
        else {
            amountsPerId[id] += sales[i].amount;        
        }
    }
    
    for (var j in amountsPerId) {
        arrayToPrint.push({ id: j, amount: amountsPerId[j] });

        // var obj = { };
        // obj.id = j;
        // obj.amount = amountsPerId[j];
        // arrayToPrint.push(obj);
    }
    
    arrayToPrint.sort(function (a, b) {
        return b.amount - a.amount;

        // if (a.amount < b.amount) {
        //     return 1;
        // } 
        // else if (b.amount < a.amount) {
        //     return -1;
        // } 
        // else {
        //     return 0;
        // }
    });


    for (var k = 0; k < arrayToPrint.length; ++k) {
        console.log(arrayToPrint[k].id + ": " + arrayToPrint[k].amount);
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
    var sales = SALES_DATA.sales;
    var amountsPerClient = { };
    var arrayToPrint = [ ];

    for (var i = 0; i < sales.length; ++i) {
        var client = sales[i].client;
        if (amountsPerClient[client] == undefined) {
            amountsPerClient[client] = sales[i].amount;
        }
        else {
            amountsPerClient[client] += sales[i].amount;
        }
    }

    for (var j in amountsPerClient) {
        arrayToPrint.push({ client: j, amount: amountsPerClient[j] });
    }

    arrayToPrint.sort(function (a, b) {
        return b.amount - a.amount;
    });

    for (var k = 0; k < arrayToPrint.length; ++k) {
        var client = arrayToPrint[k].client;
        var amount = arrayToPrint[k].amount;
        console.log(client + ": " + amount);
    }
}

// Median function for #10
function median(values) {
    values.sort(function(a, b) {
        return a - b;
    });
    console.log(values);
    var half = Math.floor(values.length / 2);
    if(values.length % 2) {
        return values[half];
    }
    else {
        return (values[half - 1] + values[half]) / 2.0;
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
function salesPersonStats(salespersonId) {
    var sales = SALES_DATA.sales;
    var count = 0;
    var totalIncome = 0;
    var arrayMedian = [];
    for (var i = 0; i < sales.length; ++i) {
        if (salespersonId == sales[i].salespersonId) {
            var name = findNameFromId(salespersonId);
            var amount = sales[i].amount;
            count += 1;
            totalIncome += amount;
            arrayMedian.push(amount);
        }
    }
    var avg = Math.round(totalIncome / count);
    console.log("Salesperson: " + name);
    console.log("# Sales: " + count);
    console.log("Total Sales: $" + totalIncome);
    console.log("Avg Sale: $" + avg);
    console.log("Median Sale: $" + median(arrayMedian));
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
        case 'salesPeople':
            fn = salesPeople;
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
        case 'salesPersonRanking': 
            fn = salesPersonRanking;
            expArgs = [ ];
            break;
        case 'clientRanking':
            fn = clientRanking;
            expArgs = [ ];
            break;
        case 'salesPersonInfo': 
            fn = salesPersonInfo;
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
        case 'salesPersonStats':
            fn = salesPersonStats;
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
        fn.apply(null, args);
    } 
}

function checkArgs(actual, expected) {
    var actualTypes = _.map(actual, function(x) { return typeof x; });
    return _.isEqual(actualTypes, expected);
}

function printHelp() {
    console.log("\nAvailable commands\n");
    console.log('salesPeople - print the names of all salespeople');
    console.log('salesPersonInfo <salespersonId> - print information about the salesperson with id <salespersonId>');
    console.log('sales - print a list of all sales and also the total amount');
    console.log('salesByPerson <salespersonId> - print a list of all sales made by the salesperson with id <salespersonId>');
    console.log('salesToClient <client> - print a list of all sales made to <client>');
    console.log('salesInDateRange <startDate> <endDate> - print a list of all sales made between <startDate> and <endDate>');
    console.log('salesPersonRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('clientRanking - print a list of all the salespeople and their total sales amount, sorted from biggest to least');
    console.log('salesPersonStats <salespersonId> - print some stats about the performance of the salesperson with id <salespersonId>')
    console.log('help - print this message\n');
}
