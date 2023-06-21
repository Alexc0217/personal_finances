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
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { Formik, Field } from 'formik';

const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { login } = useAuth()

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

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(e) => {
          dispatch(setIsLoading())
          login(e).finally(() => dispatch(setIsLoading()))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Box component='form' sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <Field name="email">
              {({ field, form, meta }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  label="E-mail"
                  autoComplete="email"
                  autoFocus
                />
              )}
            </Field>
            <Field name="password">
              {({ field, form, meta }) => (
                <TextField
                  {...field}
                  margin="normal"
                  required
                  fullWidth
                  label="Senha"
                  type="password"
                  autoComplete="current-password"
                />
              )}
            </Field>
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
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
