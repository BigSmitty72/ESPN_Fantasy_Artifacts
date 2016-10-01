$(function () {
$('#hs_chart').highcharts({
    chart: {
        type: 'bar'
    },
    legend: {
        enabled: false
    },
    title: {
        text: 'High Score Pool'
    },
    subtitle: {
        text: null
    },
    xAxis: {
        categories: ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5', 'Player 6', 'Player 7', 'Player 8', 'Player 9', 'Player 10', 'Player 11', 'Player 12'],
        title: {
            text: null
        }
    },
    yAxis: {
        min: 0,
        minRange: 90,
        tickInterval: 20,
        title: {
            text: null
        },
        labels: {
            overflow: 'justify'
        }
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: false
            }
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: 'Payout',
        data: [0, 20, 20, 0, 0, 0, 0, 0, 20, 0, 20, 0]
    }]
});