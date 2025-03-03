export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type Ingredient = {
  id: number;
  aisle: string;
  image: string;
  consistency: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
  unit: string;
};

export type RecipeDetails = Recipe & {
  summary: string;
  extendedIngredients: Ingredient[];
};
