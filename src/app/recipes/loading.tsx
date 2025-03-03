const LoadingRecipesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recipes</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="border p-4 rounded shadow animate-pulse">
            <div className="w-full h-[180px] bg-gray-300 rounded"></div>
            <div className="mt-2 h-6 bg-gray-300 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingRecipesPage;
