import React from 'react';
import Box from '@mui/material/Box';
import { DrawerHeader, Copyright } from '../../../components/index';
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Outlet />
      {/* <Copyright/> */}
    </Box>
  );
}

export default Main;
