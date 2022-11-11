import React from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function Header() {
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <Box
        component="img"
        sx={{
          width: 170,
          marginTop: 1,
        }}
        src={require('../static/img/logo.png')}
      />
          </Typography>
          <nav>
            <Link
              variant="button"
              underline="none"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
            underline="none"
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Categories
            </Link>
            <Link
              underline="none"
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              About Us
            </Link>
            <Link
              underline="none"
              variant="button"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
             Login
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      </ThemeProvider>

  )
}
