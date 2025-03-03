import { fetchRecipeDetails } from '@/api/recipes';
import { Ingredient } from '@/types/recipe';
import { Suspense } from 'react';

type Props = {
  params: Promise<{ id: string }>;
};

const RecipeDetailsPage: React.FC<Props> = async ({ params }) => {
  const id = (await params).id;
  const recipe = await fetchRecipeDetails(id);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc ml-5">
        {recipe.extendedIngredients.map(
          (ingredient: Ingredient, index: number) => (
            <li key={index}>{ingredient.name}</li>
          )
        )}
      </ul>
      <Suspense fallback={<p>Loading details...</p>}>
        <div
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
          className="mt-4"
        ></div>
      </Suspense>
    </div>
  );
};

export default RecipeDetailsPage;
