export default function (setChartData, pricesData) {
  setChartData({
    labels: pricesData.map(
      (price) =>
        new Date(price[0]).getDate() + "/" + (new Date(price[0]).getMonth() + 1)
    ),
    datasets: [
      {
        label: "My First Dataset",
        data: pricesData.map((price) => price[1]),

        borderWidth: 1,
        fill: true,
        backgroundColor: "rgba(58, 128, 233,0.1)",
        tension: 0.25,
        borderColor: "#3a80e9",
        pointRadius: 0.25,
      },
    ],
  });
}
