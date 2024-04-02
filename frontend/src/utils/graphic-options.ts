export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#ed7957"],
  grid: {
    show: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "50px",
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
      show: true,
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

export const pieOptions = {
  chart: {
    background: "transparent",
    foreColor: "red",
  },
  colors: ["#006a89", "#ed7947", "#00D4FF", "#ffd6a5"],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
  labels: {
    enabled: true,
    offsetX: "100px",
    offsetY: "100px",
    style: {
      colors: ["#006a89", "#ed7947", "#00D4FF", "#ffd6a5"],
      fontSize: "20px",
      fontFamily: "Play, sans-serif",
      fontWeight: 700,
    }
  },
  plotOptions: {
    pie: {
      customScale: 0.7,
      expandOnClick: false,
      dataLabels: {
        offset: 60,
      },
    },
  },
};

