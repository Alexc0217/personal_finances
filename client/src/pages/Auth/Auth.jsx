import { Container } from '@mui/material';
import React from 'react';
import LoginForm from './Login/LoginForm';

const Auth = () => {
  return (
  <Container maxWidth={100} disableGutters>
    <LoginForm/>
  </Container>
  );
}

export default Auth;