import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Typography, Divider } from '@mui/material';
import { AccessTime, CheckCircle, Error } from '@mui/icons-material';

const ActivityTimeline = () => {
  const activities = [
    { icon: <CheckCircle color="success" />, text: "Order #1234 completed", time: "2 hours ago" },
    { icon: <Error color="error" />, text: "Failed payment for order #1235", time: "3 hours ago" },
    { icon: <CheckCircle color="success" />, text: "New customer registration", time: "5 hours ago" },
  ];

  return (
    <List>
      {activities.map((activity, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemIcon>{activity.icon}</ListItemIcon>
            <ListItemText
              primary={activity.text}
              secondary={
                <Typography variant="caption" color="textSecondary">
                  <AccessTime fontSize="small" /> {activity.time}
                </Typography>
              }
            />
          </ListItem>
          {index < activities.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default ActivityTimeline;
