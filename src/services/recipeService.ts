// src/services/recipeService.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com'; // Replace with real API URL

export const getRecipes = async () => {
  const response = await axios.get(`${API_URL}/recipes`);
  return response.data;
};

export const getRecipeById = async (id: string) => {
  const response = await axios.get(`${API_URL}/recipes/${id}`);
  return response.data;
};

export const addRecipe = async (recipe: any) => {
  const response = await axios.post(`${API_URL}/recipes`, recipe);
  return response.data;
};
