import { Recipe as RecipeType } from '@/types/recipe';
import Link from 'next/link';

type Props = {
  recipe: RecipeType;
};

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <Link
      key={recipe.id}
      href={`/recipes/${recipe.id}`}
      className="border p-4 rounded shadow hover:bg-gray-100"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="h-40 w-full object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{recipe.title}</h2>
    </Link>
  );
};

export default Recipe;
