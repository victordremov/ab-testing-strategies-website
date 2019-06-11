Highcharts.chart('ctr-plot', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Live Data (CSV)'
    },

    subtitle: {
        text: 'Data input from a remote CSV file'
    },

    data: {
        csvURL: 'http://127.0.0.1:8000/landing/chart-data.csv',
        enablePolling: true
    }
});
