// src/components/RecipeCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const RecipeCard = () => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="Recipe Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          Recipe Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a brief description of the recipe.
        </Typography>
        <Button size="small" variant="contained" color="primary">
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
