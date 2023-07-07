import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import theme from './theme';
import NavBar from './NavBar';
import AppRouter from './AppRouter';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container component="main" sx={{ ml: '240px', p: 3 }}>
        <AppRouter />
      </Container>
    </ThemeProvider>
  );
}

export default App;
