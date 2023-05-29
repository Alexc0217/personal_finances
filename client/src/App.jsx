import Router from './Router';
import { useTheme, ThemeProvider  } from '@mui/material/styles';
import { lightTheme, darkTheme } from './themes'
import CssBaseline from '@mui/material/CssBaseline';
import './styles/reset.scss';

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
}

export default App;
