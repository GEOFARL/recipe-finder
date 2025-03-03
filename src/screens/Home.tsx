import RecipeForm from '@/components/RecipeForm';

const HomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Recipe Finder</h1>
      <RecipeForm />
    </div>
  );
};

export default HomeScreen;
