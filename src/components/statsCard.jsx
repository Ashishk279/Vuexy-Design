import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { ArrowUpward, ShoppingCart, AttachMoney, TrendingUp } from '@mui/icons-material';

const StatsCard = ({ title, value, icon: Icon, growth }) => {
  return (
    <Card sx={{ minWidth: 275, boxShadow: 3, margin: 2 }}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid item>
            <Icon sx={{ fontSize: 40, color: 'primary.main' }} />
          </Grid>
          <Grid item sx={{ ml: 2 }}>
            <Typography variant="h5">{value}</Typography>
            <Typography color="text.secondary">{title}</Typography>
            {growth && (
              <Box display="flex" alignItems="center" mt={1}>
                <ArrowUpward sx={{ color: 'green', mr: 0.5 }} />
                <Typography variant="subtitle2" color="green">{growth}</Typography>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// Usage Example


export default StatsCard;
