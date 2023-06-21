import React from 'react';
import Router from './Router';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { BackdropLoading } from './components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router />
      <BackdropLoading/>
      <ToastContainer
        theme={darkMode ? 'dark' : 'light'}
        position="bottom-right"
        closeOnClick
        draggable
      />
    </ThemeProvider>
  );
};

export default App;
