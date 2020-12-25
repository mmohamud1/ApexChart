var options = {
  chart: {
    type: 'line',
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
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();
