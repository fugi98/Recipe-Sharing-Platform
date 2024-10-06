// src/components/RecipeCard.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }: any) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt={recipe.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {recipe.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {recipe.description.substring(0, 100)}...
        </Typography>
        <Button size="small" component={Link} to={`/recipe/${recipe.id}`} variant="contained">
          View Recipe
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
