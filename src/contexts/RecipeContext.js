import { createContext, useContext, useReducer } from "react";
import { recipe } from "../data/recipes";

const RecipeContext = createContext();
const initial_state = {
  allRecipes: recipe,
};
const reducer = (state, action) => {};
const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  // console.log(state);
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider };
export const useRecipe = () => useContext(RecipeContext);
