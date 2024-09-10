import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Dashboard as DashboardIcon, ViewQuilt as LayoutIcon, Web as FrontpageIcon, ExpandLess, ExpandMore, Menu as MenuIcon, } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SchoolIcon from '@mui/icons-material/School';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GroupIcon from '@mui/icons-material/Group';
import LockIcon from '@mui/icons-material/Lock';

import { Box } from '@mui/system';

const Sidebar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State to control open/close for submenus
  const [openDashboard, setOpenDashboard] = useState(false);
  const [openLayout, setOpenLayout] = useState(false);
  const [openFrontpage, setOpenFrontpage] = useState(false);
  const [openECommerce, setopenECommerce] = useState(false);
  const [openAcademy, setOpenAcademy] = useState(false);
  const [openLogistics, setOpenLogistics] = useState(false);
  const [openInvoice, setOpenInvoice] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openAuthentication, setopenAuthentication] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(!isMobile); // Drawer toggling state

  // Functions to toggle submenus
  const handleDashboardClick = () => setOpenDashboard(!openDashboard);
  const handleLayoutClick = () => setOpenLayout(!openLayout);
  const handleFrontpageClick = () => setOpenFrontpage(!openFrontpage);
  const handleECommerceClick = () => setopenECommerce(!openECommerce);
  const handleAcademy = () => setOpenAcademy(!openAcademy);
  const handleLogistics = () => setOpenLogistics(!openLogistics);
  const handleInvoice = () => setOpenInvoice(!openInvoice);
  const handleUsers = () => setOpenUsers(!openUsers);
  const handleAuthentication = () => setopenAuthentication(!openAuthentication);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>
      {/* Menu button for mobile */}
      {isMobile && (
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleDrawer} sx={{ margin: 1 }}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar Drawer */}
      <Drawer variant={isMobile ? 'temporary' : 'permanent'} open={drawerOpen} onClose={toggleDrawer}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
            <Box component="span" sx={{ mr: 1, fontSize: '2rem', color: theme.palette.primary.main }}>V</Box>
            Vuexy
          </Typography>
        </Toolbar>

        <Divider />

        <List>
          {/* Dashboard Menu with Sub-options */}
          <ListItem button onClick={handleDashboardClick}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
            {openDashboard ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openDashboard} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['CRM', 'eCommerce', 'Logistics', 'Academy'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Layout Menu with Sub-options */}
          <ListItem button onClick={handleLayoutClick}>
            <ListItemIcon>
              <LayoutIcon />
            </ListItemIcon>
            <ListItemText primary="Layout" />
            {openLayout ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLayout} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Collapsed Menu', 'Content Navbar', 'Horizontal', 'Fluid', 'Container', 'Blank'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Frontpages Menu with Sub-options */}
          <ListItem button onClick={handleFrontpageClick}>
            <ListItemIcon>
              <FrontpageIcon />
            </ListItemIcon>
            <ListItemText primary="Frontpages" />
            {openFrontpage ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openFrontpage} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Landing', 'Pricing', 'Payment', 'Checkout', 'Help Center'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <h2 style={{margin: '0px 20px', fontSize: '20px', color:'gray'}}>App & Pages</h2>
          <ListItem button >
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
            
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Chat" />
            
          </ListItem><ListItem button >
            <ListItemIcon>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Calender" />
            
          </ListItem>
          <ListItem button >
            <ListItemIcon>
              <ViewKanbanIcon />
            </ListItemIcon>
            <ListItemText primary="Kanban" />
            
          </ListItem>
          <ListItem button onClick={handleECommerceClick}>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="eCommerce" />
            {openECommerce ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openECommerce} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Dashboard', 'Product', 'Order', 'Customer', 'Manage Reviews', 'Referrals'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem button onClick={handleAcademy}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Academy" />
            {openAcademy ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAcademy} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Dashboard', 'My Course', 'Course Details'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse><ListItem button onClick={handleLogistics}>
            <ListItemIcon>
              <LocalShippingIcon />
            </ListItemIcon>
            <ListItemText primary="Logistics" />
            {openLogistics ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openLogistics} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Dashboard', 'Fleet'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse><ListItem button onClick={handleInvoice}>
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Invoice" />
            {openInvoice ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openInvoice} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['List', 'Preview', 'Edit', 'Add'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse><ListItem button onClick={handleUsers}>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Users" />
            {openUsers ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openUsers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[ 'List', 'View'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>
          <ListItem button onClick={handleAuthentication}>
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary="Authentications" />
            {openAuthentication ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAuthentication} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {[ 'Login', 'Register', 'Verify Email', 'Reset Password', 'Forget Password'].map((subOption) => (
                <ListItem button key={subOption} sx={{ pl: 4 }}>
                  <ListItemText primary={subOption} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;

