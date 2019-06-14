function plot_cumulative_reward(target, csv) {
    Highcharts.chart(
        target,
        {
            title: {text: "Reward over sent emails"},
            data: {
                csv: csv
            },
            plotOptions: {series: {animation: {duration: 5000}}}
        }
    );
}