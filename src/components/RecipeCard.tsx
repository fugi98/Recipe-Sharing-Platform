// src/components/RecipeCard.tsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RecipeCard = ({ recipe }: any) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe.name}`);
        if (response.data.meals && response.data.meals.length > 0) {
          setImageUrl(response.data.meals[0].strMealThumb); // Get the image URL
        } else {
          setImageUrl(null); // No image found
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setError(true); // Set error state
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchImage();
  }, [recipe.name]);

  return (
    <Card>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <CardMedia
          component="img"
          height="140"
          image="https://via.placeholder.com/140" // Fallback image for errors
          alt="Fallback image"
        />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl || 'https://via.placeholder.com/140'} // Fallback image if none found
          alt={recipe.name}
        />
      )}
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
