import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <Container>
      <Typography variant="h4">Carrito de Compras</Typography>
      {cart.length === 0 ? (
        <Typography>No hay productos en el carrito.</Typography>
      ) : (
        <List>
          {cart.map((product, index) => (
            <ListItem key={index}>
              <ListItemText primary={product.name} secondary={`Precio: $${product.price}`} />
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(index)}>
                Eliminar
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      <Button variant="contained" color="primary" onClick={clearCart} disabled={cart.length === 0}>
        Vaciar Carrito
      </Button>
    </Container>
  );
};

export default Cart;
