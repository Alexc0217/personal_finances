import React, { useState } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main';
import { Box } from '@mui/material';

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <Header setOpen={setOpen} open={open}/>
      <Sidebar setOpen={setOpen} open={open}/>
      <Main/>
    </Box>
  );
}

export default HomePage;
