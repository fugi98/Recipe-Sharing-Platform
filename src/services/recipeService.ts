// src/services/recipeService.ts
import axios from 'axios';

const API_URL = 'https://6702c37bbd7c8c1ccd3fc81b.mockapi.io/recipes'; // Use your MockAPI endpoint

export const getRecipes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addRecipe = async (recipe: any) => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};
