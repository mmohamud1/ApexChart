var options = {
  chart: {
    type: 'bar',
    width: '50%',
  },
  series: [
    {
      name: 'sales',
      data: [50, 40, 35, 50, 49, 60, 70, 91, 15],
    },
  ],
  xaxis: {
    categories: [2000, 2001, 2002, 1994, 1995, 1996, 1997, 1998, 1999],
  },
  fill: {
    colors: ['#f85'],
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();
