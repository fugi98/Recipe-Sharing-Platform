// src/pages/AddRecipePage.tsx
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { addRecipe } from '../services/recipeService';

const AddRecipePage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = async () => {
    const newRecipe = {
      name,
      description,
      ingredients: ingredients.split(','),
    };
    await addRecipe(newRecipe);
    setName('');
    setDescription('');
    setIngredients('');
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 2 }}>Add New Recipe</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <TextField label="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <Button variant="contained" onClick={handleSubmit}>Add Recipe</Button>
      </Box>
    </Container>
  );
};

export default AddRecipePage;
