import { PropsWithChildren } from 'react';

const RecipeList: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{children}</div>;
};

export default RecipeList;
