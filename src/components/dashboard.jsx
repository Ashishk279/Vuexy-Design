import React from 'react';
import { Box, CssBaseline, Grid, Container, useMediaQuery } from '@mui/material';
import Sidebar from './sidebar';
import Navbar from './navbar';
import { Footer } from './footer';
import { AverageDailySales } from './dailySales';
import { SalesOverview } from './salesOverview';
import { EarningReports } from './earningReports';
import { Margin } from '@mui/icons-material';
import SupportTracker from './tracker';

const Dashboard = ({ children }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: isSmallScreen ? '0' : '12rem' }}>
      <CssBaseline />
      <Navbar />

      <Container>
        {/* Adjusting the grid system for different screen sizes */}
        <Grid container spacing={2} direction={isSmallScreen ? 'column' : 'row'}>
          {/* Each page has the same height and width */}
          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: '100%', width:'100%', minHeight: '300px' }}>
              <AverageDailySales />
            </Box>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: '100%',width:'100%',  minHeight: '300px' }}>
              <SalesOverview />
            </Box>
          </Grid>
           
           <div style={{margin: '12px 0px'}}> <Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: '100%', width:'100%', minHeight: '300px' }}>
              <EarningReports />
            </Box>
          </Grid>
           
          
          </div>
<Grid item xs={12} md={6} lg={4}>
            <Box sx={{ height: '100%', width:'100%', minHeight: '300px' }}>
              <SupportTracker/>
            </Box>
          </Grid>

         
        </Grid>
      </Container>

      {/* Sidebar only for larger screens */}
      {!isSmallScreen && <Sidebar />}

      {/* Footer always visible */}
      <Footer />

      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Dashboard;
