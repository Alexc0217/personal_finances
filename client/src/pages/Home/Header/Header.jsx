import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" justifyContent="flex-start" width="50%">
          <IconButton>
            <MenuIcon/>
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="flex-end" width="50%">
          <ThemeSwitch/>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <IconButton>
            <AccountCircle/>
          </IconButton>
          <Link to="/">
            <IconButton>
              <LogoutIcon/>
            </IconButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
