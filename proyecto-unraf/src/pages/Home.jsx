import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Bienvenido a la Tienda Online
      </Typography>
      <Typography variant="body1" align="center">
        Explora nuestros productos y disfruta de la mejor experiencia de compra.
      </Typography>
    </Container>
  );
};

export default Home;
