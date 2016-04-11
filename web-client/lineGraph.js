// function buildChartFromUrl(url) {
// 	$.ajax({ url: url, success: function(result) {
// 		buildChartFromData(result);
// 	}});
// }

function buildChartFromData(result, title) {
	var incomeSeries = {
		x: [ ],
		y: [ ],
		mode: 'lines',
		type: 'scatter',
		name: 'Income'
	}

	var salesSeries = {
		x: [ ],
		y: [ ],
		mode: 'markers',
		type: 'scatter',
		name: 'Sale',
		text: [ ]
	}

	var income = 0;
	_.each(result.sales, function(sale) {
		var string = 'ID: ' + sale.id + 
			', <br>Name: ' + sale.name + 
			', <br>Amount: $' + sale.amount + 
			', <br>Client: ' + sale.client +
			', <br>Date: ' + sale.date;
		salesSeries.text.push(string);
		income += sale.amount;
		incomeSeries.x.push(sale.date);
		incomeSeries.y.push(income);
		salesSeries.x.push(sale.date);
		salesSeries.y.push(sale.amount);

	});

	var layout = {
	    xaxis: {
	    	title: 'Date(mm/dd/yyyy)',
	    	tickangle: 45,
	    },
	    yaxis: {
	    	title: 'Income($)'
	    },
	    showlegend: true,
	};

	var data = [incomeSeries, salesSeries];
	Plotly.newPlot('chart', data, layout, {showLink: false, displaylogo: false});
}