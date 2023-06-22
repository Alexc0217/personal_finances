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
import { useAuth } from '../../../hooks/useAuth/useAuth';
import { setIsLoading } from '../../../store/reducers/loadingSlice';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch()
  const { register } = useAuth()

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
          Registro
      </Typography>
      <Formik
        initialValues={{
          "fullName": "",
          "cpf": "",
          "email": '',
          "confirm-email": '',
          "password": '',
          "confirm-password": '' }}
        onSubmit={(e) => {
          dispatch(setIsLoading())
          register({
            fullName: e.fullName,
            cpf: e.cpf,
            email: e.email,
            password: e.password,
          }).finally(() => dispatch(setIsLoading()))
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
        }) => (
          <Box
            component="form"
            sx={{ mt: 1 }}
            onSubmit={handleSubmit}
          >
            <Grid
              container
              spacing={1}
              columns={16}
            >
              <Grid item display="flex" gap={2}>
                <Field name="fullName">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="Nome Completo"
                      autoComplete="name"
                      autoFocus
                    />
                  )}
                </Field>
                <Field name="cpf">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="CPF"
                      autoComplete="cpf"
                      autoFocus
                    />
                  )}
                </Field>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      required
                      fullWidth
                      label="E-mail"
                      type="email"
                      autoComplete="email"
                    />
                  )}
                </Field>
                <Field name="email-confirm">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      required
                      fullWidth
                      label="Confirmar E-mail"
                      type="email"
                    />
                  )}
                </Field>
              </Grid>
              <Grid item display="flex" gap={2}>
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                    />
                  )}
                </Field>
                <Field name="password-confirm">
                  {({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      required
                      fullWidth
                      label="Confirmar Senha"
                      type="password"
                    />
                  )}
                </Field>
              </Grid>
            </Grid>
            {/* <FormControlLabel
              control={<Checkbox value="remember" required color="primary" sx={{
                marginLeft: '5px',
              }} />}
              label="Você concorda com as nossas condições?"
              labelPlacement='start'
            /> */}
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
                <Link variant="body2" href='/' underline="hover">
                Já possui uma conta?
                </Link>
              </Grid>
            </Grid>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterForm;
