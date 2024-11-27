import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 100, image: '/assets/product1.jpg' },
  { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 200, image: '/assets/product2.jpg' },
];

const ProductList = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.name} />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <Typography variant="subtitle1">${product.price}</Typography>
              <Button variant="contained" component={Link} to={`/productos/${product.id}`}>
                Ver detalles
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
