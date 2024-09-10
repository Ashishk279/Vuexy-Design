import React from 'react';
import { Line } from 'react-chartjs-2';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export const AverageDailySales = () => {
  // Define the chart data and options
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1500, 900, 1400, 1800, 1300, 1700], // Sample zig-zag data
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.1)', // Light green shading
        fill: true,
        tension: 0.4, // Make the line smooth with zig-zag effect
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines for x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Hide grid lines for y-axis
        },
      },
    },
  };

  return (
    <Card sx={{height: '22rem', width:'30rem', margin: '0px 1rem'}}>
      <CardHeader title="Average Daily Sales" />
      <h4 style={{marginLeft:'12px'}}>Total Sales This Month</h4>
      <CardContent>
        <Typography variant="h4">$1,500</Typography>
        <Line data={data} options={options} />
      </CardContent>
    </Card>
  );
};
