import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import convertNumber from "../../../functions/convertNumber";

export default function LineChart({ data, priceType }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      interaction: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            if (priceType == "prices")
              return (
                "$" + value.toLocaleString()
              ); // Add a dollar sign to the labels
            else if (priceType == "market_caps")
              return "$" + convertNumber(value);
            else return convertNumber(value);
          },
        },
      },
    },
  };
  return <Line options={options} data={data} />;
}
