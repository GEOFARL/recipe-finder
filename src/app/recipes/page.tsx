import { fetchRecipes } from '@/api/recipes';
import RecipeComponent from '@/components/Recipe';
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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((recipe) => (
            <RecipeComponent key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}
