import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import useSignin from './hooks/useSignin';
import { Form, Formik } from "formik";
import initialValues from './services/SigninServices';
const theme = createTheme();

export default function Signin({ location, history, isAuthenticated, onLogin }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { from } = location.state || { from: { pathname: "/" } };

  const { errorMessage, handleLogin } = useSignin(onLogin);

  useEffect(() => {
      if (isAuthenticated) {
          history.replace(from)
          history.go("/")
      }
  });


  const handleSubmit = (event) => {
    handleLogin({"username":username, "password":password})
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Formik onSubmit={handleSubmit} initialValues={initialValues} validator={() => ({})}>
          <Form>
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}