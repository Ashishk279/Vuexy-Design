import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { NewReleases, FolderOpen, AccessTime, Speed } from '@mui/icons-material';

const SupportTracker = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Support Tracker - Last 7 Days
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {/* Total Tickets */}
        <Box sx={{ flex: '1 1 100%', sm: '1 1 50%', md: '1 1 20%' }}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Tickets</Typography>
              <Typography variant="h4" color="primary">164</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* New Tickets */}
        <Box sx={{ flex: '1 1 100%', sm: '1 1 50%', md: '1 1 20%' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <NewReleases color="primary" fontSize="large" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">New Tickets</Typography>
                  <Typography variant="h4">142</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Open Tickets */}
        <Box sx={{ flex: '1 1 100%', sm: '1 1 50%', md: '1 1 20%' }}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FolderOpen color="primary" fontSize="large" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">Open Tickets</Typography>
                  <Typography variant="h4">28</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>

       
      </Box>
    </Box>
  );
};

export default SupportTracker;
