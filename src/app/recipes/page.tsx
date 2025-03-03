import { fetchRecipes } from '@/api/recipes';
import RecipeComponent from '@/components/RecipeCard';
import RecipeList from '@/components/RecipeList';
import { Suspense } from 'react';

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { query = '', cuisine = '', maxReadyTime = '' } = await searchParams;
  const data = await fetchRecipes(query, cuisine, maxReadyTime);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <Suspense fallback={<p>Loading recipes...</p>}>
        <RecipeList>
          {data.map((recipe) => (
            <RecipeComponent key={recipe.id} recipe={recipe} />
          ))}
        </RecipeList>
      </Suspense>
    </div>
  );
}
