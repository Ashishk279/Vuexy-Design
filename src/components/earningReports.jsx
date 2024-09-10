import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale);

export const EarningReports = () => {
  // Data for the bar chart
  const data = {
    labels: ['Earnings', 'Profit', 'Expense'],
    datasets: [
      {
        label: 'Amount',
        data: [545.69, 256.34, 74.19], // Example values
        backgroundColor: ['#4caf50', '#2196f3', '#ff5722'], // Green for earnings, blue for profit, red for expense
        borderRadius: 10,
      },
    ],
  };

  // Chart options to hide x-axis and y-axis lines
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
    <Card sx={{height: '32rem', width:'31rem', margin: '0px 1rem'}}>
      <CardContent>
        <Typography variant="h6">Earning Reports</Typography>

        {/* Weekly Earnings Overview */}
        <Typography variant="h3" style={{ fontWeight: 'bold', marginTop: '10px' }}>
          $468
        </Typography>
        <Typography variant="body1" style={{ color: 'green', marginBottom: '10px' }}>
          +4.2%
        </Typography>
        <Typography variant="subtitle1">
          You informed of this week compared to last week
        </Typography>

        {/* Icons and Details */}
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {/* Earnings Section */}
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <AttachMoneyIcon style={{ fontSize: '40px', marginRight: '10px', color: '#4caf50' }} />
              <Box>
                <Typography variant="h6">Earnings</Typography>
                <Typography variant="subtitle1">$545.69</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Profit Section */}
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <TrendingUpIcon style={{ fontSize: '40px', marginRight: '10px', color: '#2196f3' }} />
              <Box>
                <Typography variant="h6">Profit</Typography>
                <Typography variant="subtitle1">$256.34</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Expense Section */}
          <Grid item xs={4}>
            <Box display="flex" alignItems="center">
              <MoneyOffIcon style={{ fontSize: '40px', marginRight: '10px', color: '#ff5722' }} />
              <Box>
                <Typography variant="h6">Expense</Typography>
                <Typography variant="subtitle1">$74.19</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Bar Graph */}
        <Box style={{ marginTop: '20px' }}>
          <Bar data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};
