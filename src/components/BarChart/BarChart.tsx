import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

interface BarChartProps {
  expectedValues: number[];
  actualizedValues: number[];
}

const BarChart: React.FC<BarChartProps> = ({ expectedValues, actualizedValues }) => {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const previousMonthIndex1 = currentMonthIndex === 0 ? 11 : currentMonthIndex - 1;
  const previousMonthIndex2 = previousMonthIndex1 === 0 ? 11 : previousMonthIndex1 - 1;

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const monthLabels = [
    monthNames[previousMonthIndex2],
    monthNames[previousMonthIndex1],
    monthNames[currentMonthIndex],
  ];

  const data = {
    labels: monthLabels,
    datasets: [
      {
        label: 'Expected Values',
        data: expectedValues,
        backgroundColor: 'rgba(199,197,222)', // color for expected values
      },
      {
        label: 'Actualized Values',
        data: actualizedValues,
        backgroundColor: 'rgba(72,68,115)', // color for actualized values
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
