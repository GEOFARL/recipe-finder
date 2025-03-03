import { MOCK_DATA } from '@/app/recipes/mockData';
import { Recipe } from '@/types/recipe';

export const fetchRecipes = async (
  query: string,
  cuisine: string,
  maxReadyTime: string
): Promise<Recipe[]> => {
  // const apiKey = process.env.SPOONACULAR_API_KEY;
  // const params = new URLSearchParams({
  //   query,
  //   cuisine,
  //   maxReadyTime,
  //   apiKey: apiKey ?? '',
  // });

  // const res = await fetch(
  //   `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}`,
  //   {
  //     next: { revalidate: 60 },
  //   }
  // );
  // console.log(res);

  // if (!res.ok) throw new Error('Failed to fetch recipes');
  // return res.json();
  console.log('fetching recipes...', query, cuisine, maxReadyTime);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return MOCK_DATA.results;
};
