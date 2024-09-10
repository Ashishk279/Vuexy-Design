import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [3000, 2500, 2700, 3200, 4000, 4500],
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'blue',
    },
  ],
};

const RevenueChart = () => {
  return (
    <Card sx={{ boxShadow: 3, margin: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Revenue Chart
        </Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
