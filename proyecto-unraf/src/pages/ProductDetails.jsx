import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción detallada del producto 1', price: 100 },
  { id: 2, name: 'Producto 2', description: 'Descripción detallada del producto 2', price: 200 },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito.');
  };

  if (!product) {
    return <Typography>Producto no encontrado.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4">{product.name}</Typography>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h6">Precio: ${product.price}</Typography>
      <Button variant="contained" color="primary" onClick={addToCart}>
        Agregar al Carrito
      </Button>
    </Container>
  );
};

export default ProductDetails;
