import { createContext } from "react";

const RecipeContext = createContext();
const RecipeProvider = ({ children }) => {
  return <RecipeContext.Provider>{children}</RecipeContext.Provider>;
};
