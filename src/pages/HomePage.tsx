// src/pages/HomePage.tsx
import React from 'react';
import { Container, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';

const HomePage = () => {
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Recipe Sharing Platform
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <RecipeCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
