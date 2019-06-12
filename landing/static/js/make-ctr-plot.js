Highcharts.chart('ctr-plot', {
    chart: {
        animation: {
            duration: 5000
        }
    },
    title: {
        text: 'Reward over sent emails'
    },
    data: {
        csvURL: 'http://127.0.0.1:8000/landing/chart-data.csv'
    }
});
