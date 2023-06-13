import React from 'react';
import Box from '@mui/material/Box';
import { DrawerHeader } from '../../../components/index';

const Main = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
    </Box>
  );
}

export default Main;
