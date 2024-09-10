import React from 'react';
import { Card, CardContent, Typography, Grid, Box, useMediaQuery } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';

export const SalesOverview = () => {

  const isSmall = useMediaQuery('(max-width:899px)')
  return (
    <Card sx={{height: '22rem', width:'30rem', margin: isSmall ? '0px 1rem' :'0px 10rem'}}>
      <CardContent>
        <Typography variant="h6">Sales Overview</Typography>

        {/* Percentage +18.2% in green */}
        <Typography variant="h4" style={{ color: 'green', marginBottom: '10px' }}>
          +18.2%
        </Typography>

        {/* Sales Amount */}
        <Typography variant="h3" style={{ fontWeight: 'bold' }}>
          $42.5k
        </Typography>

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {/* Orders Section */}
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <ShoppingCartIcon style={{ fontSize: '40px', marginRight: '10px' }} />
              <Box>
                <Typography variant="h6" style={{ color: 'blue' }}>Order</Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>62.2%</Typography>
                <Typography variant="subtitle1">6,440</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Visits Section */}
          <Grid item xs={6}>
            <Box display="flex" alignItems="center">
              <PeopleIcon style={{ fontSize: '40px', marginRight: '10px' }} />
              <Box>
                <Typography variant="h6" style={{ color: 'lightblue' }}>Visits</Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>25.5%</Typography>
                <Typography variant="subtitle1">12,749</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
