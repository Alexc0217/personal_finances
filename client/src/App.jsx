import React from 'react'
import Router from './Router'
import { useTheme, ThemeProvider } from '@mui/material/styles'
import { lightTheme, darkTheme } from './themes'
import CssBaseline from '@mui/material/CssBaseline'

const App = () => {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Router />
        </ThemeProvider>
  )
}

export default App
