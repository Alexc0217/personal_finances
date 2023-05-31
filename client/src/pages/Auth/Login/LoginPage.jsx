import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import React from 'react'
import LoginForm from './Form'
import ThemeSwitch from '../../../components/ThemeSwitch/ThemeSwitch'
import Copyright from '../Copyright/Copyright'

const LoginPage = () => {
  return (
  <>
    <Container 
      component="main" 
      maxWidth="xs" 
      sx={{
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }}>
      <LoginForm/>
      <Box mt={10}>
        <Copyright/>
      </Box>
    </Container>
    <Container
      component="footer"
      maxWidth="xl" 
      disableGutters 
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        height: '5vh'
    }}>
      <ThemeSwitch/>
    </Container>
  </>
  )
}

export default LoginPage
