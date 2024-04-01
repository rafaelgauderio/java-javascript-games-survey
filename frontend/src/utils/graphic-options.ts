export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#ed7957"],
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "60px",
    },
  },
  dataLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      labels: {
        maxWidth: 360,
        style: {
          colors: "#04c7ef",
          fontSize: "19px",
          fontFamily: "Play, sans-serif",
          fontWeight: 400,
        },
      },
    },
  ],
};

