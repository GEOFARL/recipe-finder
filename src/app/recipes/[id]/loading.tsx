const LoadingRecipeDetails: React.FC = () => {
  return (
    <div className="p-6">
      <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse"></div>

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="mt-2 space-y-2">
        {Array.from({ length: 14 }).map((_, index) => (
          <li
            key={index}
            className="h-5 w-1/3 bg-gray-300 rounded animate-pulse"
          ></li>
        ))}
      </ul>

      <div className="mt-6 h-32 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );
};

export default LoadingRecipeDetails;
