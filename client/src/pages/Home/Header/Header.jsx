/* eslint-disable react/prop-types */
import { Box, Container, IconButton, Toolbar, Typography } from '@mui/material';

import React from 'react';
import { ThemeSwitch, AppBar } from '../../../components/index';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth/useAuth';
import Tooltip from '@mui/material/Tooltip';


const Header = ({ open, setOpen }) => {
  const { logout } = useAuth()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <Box display="flex" justifyContent="flex-start" width="50%">
          <IconButton color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }} onClick={() => handleDrawerOpen()}>
            <MenuIcon/>
          </IconButton>
        </Box>
        <Box display="flex" justifyContent="flex-end" width="50%">
          <ThemeSwitch/>
          <Tooltip title={'Bem vindo!'}>
            <IconButton>
              <AccountCircle/>
            </IconButton>
          </Tooltip>
          <IconButton onClick={() => logout()}>
            <LogoutIcon/>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
