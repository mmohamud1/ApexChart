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
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        {
          offset: 0,
          color: '#EB656F',
          opacity: 1,
        },

        {
          offset: 60,
          color: '#61DBC3',
          opacity: 1,
        },

      ],
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);

chart.render();
