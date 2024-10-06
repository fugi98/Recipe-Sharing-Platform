// src/pages/RecipeDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@mui/material';
import { getRecipeById } from '../services/recipeService';
import { useEffect, useState } from 'react';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getRecipeById(id).then(data => setRecipe(data));
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{recipe.name}</Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">{recipe.description}</Typography>
          <Typography variant="body2">Ingredients: {recipe.ingredients.join(', ')}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetailPage;
