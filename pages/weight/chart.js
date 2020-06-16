/* chart.js */

// chart colors
var color = "#007bff";

/* large line chart */
var chLine = document.getElementById("chartLine");
var chartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [62, 65, 80, 68, 74, 69, 63],
      backgroundColor: "transparent",
      borderColor: color,
      borderWidth: 4,
      pointBackgroundColor: color,
    },
  ],
};
if (chLine) {
  new Chart(chLine, {
    type: "line",
    data: chartData,
    options: {
      scales: {
        xAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      responsive: true,
    },
  });
}
