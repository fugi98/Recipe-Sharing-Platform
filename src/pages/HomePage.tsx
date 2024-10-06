// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, Typography, Grid } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
import { getRecipes } from '../services/recipeService';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Recipe Sharing Platform</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {recipes.map((recipe: any) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
