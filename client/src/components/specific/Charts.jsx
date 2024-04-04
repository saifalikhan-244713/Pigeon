// // const Charts = () => {
// //   return (
// //     <div>Charts</div>
// //   )
// // }
// import {
//   ArcElement,
//   CategoryScale,
//   Chart as ChartJS,
//   Filler,
//   Legend,
//   LineElement,
//   LinearScale,
//   PointElement,
//   Tooltip,
// } from "chart.js";
// import { Doughnut, Line } from "react-chartjs-2";
// import { purpleLight } from "../../constants/color";
// import { purple } from "../../constants/color";

// ChartJS.register(
//   Tooltip,
//   CategoryScale,
//   LinearScale,
//   LineElement,
//   PointElement,
//   Filler,
//   ArcElement,
//   Legend
// );

// const lineChartOptions = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//     },
//     title: {
//       display: false,
//     },
//   },

//   scales: {
//     x: {
//       grid: {
//         display: false,
//       },
//     },
//     y: {
//       beginAtZero: true,
//       grid: {
//         display: false,
//       },
//     },
//   },
// };

// const LineChart = ({ value = [] }) => {
//   //   const data = {
//   //     labels,
//   //     datasets: [
//   //       {
//   //         data: value,
//   //         label: "Messages",
//   //         fill: true,
//   //         backgroundColor: purpleLight,
//   //         borderColor: purple,
//   //       },
//   //     ],
//   //   };
//   const data = {
//     labels: ["january", "february", "march", "april"],
//     datasets: [
//       {
//         data: value,
//         label: "Messages",
//         fill: true,
//         backgroundColor: purpleLight,
//         borderColor: purple,
//       },
//     ],
//   };
//   // return <Line data={data} options={lineChartOptions} />;
//   return <Line data={data} options={lineChartOptions} />;
// };
// const DoughnutChart = () => {
//   //   const data = {
//   //     labels,
//   //     datasets: [
//   //       {
//   //         data: value,
//   //         backgroundColor: [purpleLight, orangeLight],
//   //         hoverBackgroundColor: [purple, orange],
//   //         borderColor: [purple, orange],
//   //         offset: 40,
//   //       },
//   //     ],
//   //   };
//   //   return (
//   //     <Doughnut
//   //       style={{ zIndex: 10 }}
//   //       data={data}
//   //       options={doughnutChartOptions}
//   //     />
//   //   );
//   return <div>Doughnut charts</div>;
// };

// export default { LineChart, DoughnutChart };

// {iuhefuhjolsndv}

// Import necessary modules
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { purpleLight, purple, orangeLight } from "../../constants/color";
import { getLast7Days } from "../../lib/features";
import { orange } from "@mui/material/colors";

// Register chart elements with ChartJS
ChartJS.register(
  Tooltip,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Legend
);

const labels = getLast7Days();
// Define line chart options
const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

// Define LineChart component
export const LineChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        label: "Revenue",
        fill: true,
        backgroundColor: purpleLight,
        borderColor: purple,
      },
    ],
  };
  return <Line data={data} options={lineChartOptions} />;
};

// Define DoughnutChart component
export const DoughnutChart = ({ value = [] }) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
        backgroundColor: [purpleLight, orangeLight],
        hoverBackgroundColor: [purple, orange],
        borderColor: [purple, orange],
        offset: 40,
      },
    ],
  };

  return <Doughnut data={data} />;
};
