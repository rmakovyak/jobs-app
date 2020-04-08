import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  CssBaseline,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Box,
} from '@material-ui/core';

import Routes from './Routes';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <CssBaseline />
        <Container maxWidth="md">
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Jobs listing
              </Typography>
            </Toolbar>
          </AppBar>
          <Box pt={2}>
            <Routes />
          </Box>
        </Container>
      </Router>
    </>
  );
}

export default App;
