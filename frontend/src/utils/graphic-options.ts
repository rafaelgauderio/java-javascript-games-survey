export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#40e0d0"],
  grid: {
    show: false,
  },
  
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 10,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "50px", 
      barWidht: "200px"    
    }
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
        maxWidth: 300,
        style: {
          colors: "#04c7ef",
          fontSize: "16px",
          fontFamily: "Play, sans-serif",
          fontWeight: 700,
        },
      },      
    },
  ],
};

export const pieOptions = {
  responsive: [{
    breakpoint: 576,
    options: {
      chart: {
        width: 250
      },
      legend: {
        position: 'bottom'
      }
    }
  }],
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
      fontSize: "25px",
      fontFamily: "Play, sans-serif",
      fontWeight: 700,
    }
  },
  plotOptions: {
    pie: {
      customScale: 0.9,
      expandOnClick: true,
      dataLabels: {
        offset: 50,
      },
    },
  },
};

