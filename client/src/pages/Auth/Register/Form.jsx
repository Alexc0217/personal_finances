import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const RegisterForm = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, marginBottom: 2, bgcolor: 'primary.main' }} />
      <Typography component="h1" variant="h5">
          Cadastro
      </Typography>
      <Box component="form" sx={{ mt: 1 }}>
        <Grid container spacing={1} columns={16}>
          <Grid item display="flex" gap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Nome Completo"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="CPF"
              name="id"
              autoComplete="cpf"
              autoFocus
            />
          </Grid>
          <Grid item display="flex" gap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="E-mail"
              type="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="email-confirm"
              label="Confirmar E-mail"
              type="email"
            />
          </Grid>
          <Grid item display="flex" gap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password-confirm"
              label="Confirmar Senha"
              type="password"
            />
          </Grid>

        </Grid>
        <FormControlLabel
          control={<Checkbox value="remember" required color="primary" sx={{
            marginLeft: '5px',
          }} />}
          label="Você concorda com as nossas condições?"
          labelPlacement='start'
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
            Criar
        </Button>
        <Grid container>
          <Grid item xs display="flex" justifyContent="flex-end">
            <Link variant="body2" href='/'>
                Já possui uma conta?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegisterForm;
