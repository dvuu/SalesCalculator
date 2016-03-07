// This file contains code to generate a random sales.json file. It uses a 
// library called chance.js which contains handy functions for generating random things.
// YOU DON'T NEED TO RUN THIS

var fs = require('fs');
var chance = new (require('chance'))();

// A list of real companies to select from
var FORTUNE_500 = [ 'Wal-Mart Stores', 'Exxon Mobil', 'Chevron', 'Berkshire Hathaway', 'Apple',
                    'Phillips', 'General Motors', 'Ford Motor', 'General Electric', 'Valero Energy',
                    'AT&T', 'CVS Caremark', 'Fannie Mae', 'United Health Group', 'McKesson',
                    'Verizon Communications', 'Hewlett-Packard', 'J.P. Morgan Chase & Co.',
                    'Costco Wholesale', 'Express Scripts Holding', 'Bank of America', 'Cardinal Health',
                    'International Business Machines', 'Kroger', 'Marathon Petroleum', 'Citigroup', 
                    'Archer Daniels Midland', 'Amerisource', 'Bergen', 'Wells Fargo', 'Boeing', 
                    'Procter & Gamble', 'Freddie Mac', 'Home Depot', 'Microsoft', 'Amazon.com', 'Target', 
                    'Walgreen Co.', 'WellPoint', 'Johnson & Johnson', 'American International Group', 
                    'State Farm Insurance Cos.', 'MetLife', 'PepsiCo', 'Comcast', 'United Technologies', 
                    'Google', 'Conoco', 'Phillips', 'Dow Chemical', 'Caterpillar', 
                    'United Parcel Service', 'Pfizer' ];

var NUM_SALESPEOPLE = 10;
var NUM_CLIENTS = 20;
var NUM_SALES = 200;

var result = { };

// Generate the salespeople
result.salespeople = [ ];
for (var i = 0; i < NUM_SALESPEOPLE; ++i) {
    var firstName = chance.first();
    var lastName = chance.last();
    result.salespeople.push({
        name: firstName + ' ' + lastName,
        phone: chance.phone(),
        email: firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@gmail.com',
        id: firstName[0].toLowerCase() + lastName.toLowerCase()
    });
}

// Generate the sales
var clients = chance.pickset(FORTUNE_500, NUM_CLIENTS);
result.sales = [ ];
for (var i = 0; i < NUM_SALES; ++i) {
    var salesperson = chance.pickone(result.salespeople);
    result.sales.push({
        salespersonId: salesperson.id,
        amount: chance.integer({ min: 1, max: 100 }) * 10000,
        date: chance.date({string: true, year: 2015}),
        client: chance.pickone(clients)
    });
}

// Write the file
fs.writeFileSync('./sales.json', JSON.stringify(result, null, '\t'), 'utf8');
