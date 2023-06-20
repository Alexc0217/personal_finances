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
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../../../store/reducers/loadingSlice';

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
          Autenticação
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={() => {
        // Esse trecho depende da requisição, é apenas uma amostra
        dispatch(setIsLoading())
        setTimeout(() => {
          dispatch(setIsLoading())
        }, 2000)
        navigate('/home')
      }}>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Usuário"
          name="user"
          autoComplete="user"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar senha"
        />
        <Button
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
            Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link variant="body2">
                Esqueceu sua senha?
            </Link>
          </Grid>
          <Grid item>
            <Link variant="body2" href='/signup'>
              {'Registre-se'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginForm;
