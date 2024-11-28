import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Tienda Online
      </Typography>
      <Button color="inherit" component={Link} to="/">Inicio</Button>
      <Button color="inherit" component={Link} to="/productos">Productos</Button>
      <Button color="inherit" component={Link} to="/carrito">Carrito</Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
