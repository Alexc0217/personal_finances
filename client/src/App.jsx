import React from 'react';
import Router from './Router';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from "react-redux";
import { BackdropLoading } from './components'

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router />
      <BackdropLoading/>
    </ThemeProvider>
  );
};

export default App;
