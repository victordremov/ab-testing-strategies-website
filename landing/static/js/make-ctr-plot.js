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
        csvURL: 'https://victordremov.pythonanywhere.com/landing/chart-data.csv'
    }
});
