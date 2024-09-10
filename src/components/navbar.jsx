import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Avatar,
  Badge,
  useMediaQuery,
  useTheme,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Search, Notifications, AccountCircle, Language, Menu as MenuIcon } from '@mui/icons-material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { styled, alpha } from '@mui/material/styles';
import { ethers } from 'ethers';
import Sidebar from './sidebar';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [signer, setSigner] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleConnect = async () => {
    if (typeof web3 !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const [selectedAccount] = await window.ethereum.request({ method: 'eth_requestAccounts' });

        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [selectedAccount, 'latest']
        });

        const signer = await provider.getSigner(selectedAccount);
        setSigner(signer);

        setAddress(selectedAccount);
        setBalance(balance);

        alert(`Successfully connected with Metamask: ${selectedAccount}`);
      } catch (error) {
        alert(`Error connecting with Metamask: ${error.message}`);
      }
    } else {
      alert("Please install Metamask!");
    }
  };

  const isMenuOpen = Boolean(anchorEl);
  const isLanguageMenuOpen = Boolean(languageAnchorEl);

  const menuId = 'profile-menu';
  const languageMenuId = 'language-menu';

  // Search Bar Style
  const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.1),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch', // Increased width
        '&:focus': {
          width: '30ch', // Increased focus width
        },
      },
    },
  }));

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 'none', marginTop: 2, marginLeft: 2, marginRight: 2 }}>
      <Toolbar>
        {isMobile ? (
          <>
            {/* Mobile Menu Icon */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              sx={{ color: 'black'}}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
             <Sidebar/>
            </Drawer>
          </>
        ) : (
        //  " <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
        //   </Typography>"
        ""
        )}

        {/* Search Bar visible on all views */}
        <SearchBar sx={{marginLeft: '200px',color:'black', background:'white'}}>
          <SearchIconWrapper >
            <Search />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
        </SearchBar>

        <Box sx={{ flexGrow: 1 }} />

        {/* Language Selector */}
        <IconButton size="large" color="inherit" onClick={handleLanguageClick}>
          <Language sx={{ color: 'black' }} />
        </IconButton>
        <Menu
          id={languageMenuId}
          anchorEl={languageAnchorEl}
          open={isLanguageMenuOpen}
          onClose={handleLanguageClose}
        >
          <MenuItem onClick={handleLanguageClose}>English</MenuItem>
          <MenuItem onClick={handleLanguageClose}>Spanish</MenuItem>
          <MenuItem onClick={handleLanguageClose}>French</MenuItem>
        </Menu>

        {/* Notifications */}
        <IconButton size="large" aria-label="show new notifications" color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ color: 'black' }} />
          </Badge>
        </IconButton>

        {/* Wallet Connect */}
        <AccountBalanceWalletIcon onClick={handleConnect} sx={{ color: 'black', marginLeft: '10px', marginRight: '10px' }} />

        {/* Profile Icon */}
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <Avatar alt="Profile" src="/static/images/avatar/1.jpg" />
        </IconButton>

        {/* Profile Menu */}
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          PaperProps={{
            style: {
              width: '200px',
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
