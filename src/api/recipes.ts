import { MOCK_DETAILS, MOCK_RECIPES } from '@/api/mockData';
import { Recipe, RecipeDetails } from '@/types/recipe';
import apiClient from './client';

export const fetchRecipes = async (
  query: string,
  cuisine: string,
  maxReadyTime: string
): Promise<Recipe[]> => {
  console.log('Fetching recipes...', query, cuisine, maxReadyTime);

  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return MOCK_RECIPES.results;
  }

  const { data } = await apiClient.get<{ results: Recipe[] }>(
    '/complexSearch',
    {
      params: { query, cuisine, maxReadyTime },
      cache: { ttl: 60 * 1000 },
    }
  );

  return data.results;
};

export const fetchRecipeDetails = async (
  id: string
): Promise<RecipeDetails> => {
  if (process.env.NODE_ENV === 'development') {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return MOCK_DETAILS;
  }
  const { data } = await apiClient.get<RecipeDetails>(`/${id}/information`, {
    cache: { ttl: 60 * 1000 },
  });

  return data;
};
