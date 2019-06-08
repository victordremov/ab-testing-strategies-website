Highcharts.chart('ctr-plot', {
  chart: {
    marginRight: 10
  },
  plotOptions: {
        series: {
            animation: {
                duration: 5000
            }
        }
  },
  time: {
    useUTC: false
  },

  title: {
    text: 'Live sin data'
  },
  xAxis: {
    type: 'datetime'
  },
  yAxis: {
    title: {
      text: 'Value'
    },
    max: 1,
    min: -1,
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    type: 'line',
    name: 'Sine data',
    data: (function() {
      let points = [];
      for (i = 1; i <= 1000; i += 1) {
        points.push([new Date(2019, 4, 25, 0, i).getTime(), Math.sin(i / 100)]);
      }
      return points;
    }())
  }]
});