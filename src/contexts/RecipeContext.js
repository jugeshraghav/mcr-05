import { createContext, useContext, useReducer } from "react";
import { recipe } from "../data/recipes";

const RecipeContext = createContext();
const initial_state = {
  allRecipes: recipe,
  searchText: "",
  radioText: "",
};
const reducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "set_search_text":
      return { ...state, searchText: payLoad };
    case "set_radio_text":
      return { ...state, radioText: payLoad };
    case "filter_recipes":
      return {
        ...state,
        allRecipes:
          payLoad.length > 1
            ? state?.allRecipes?.filter((recipe) =>
                state.radioText === "name"
                  ? recipe.title.toLowerCase().includes(payLoad.toLowerCase())
                  : state.radioText === "ingredients"
                  ? recipe.instructions
                      .join("")
                      .toLowerCase()
                      .includes(payLoad.toLowerCase())
                  : recipe.instructions
                      .join("")
                      .toLowerCase()
                      .includes(payLoad.toLowerCase())
              )
            : recipe,
      };
    case "edit_recipe":
      return { ...state, allRecipes: payLoad };
  }
};
const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  // console.log(state);
  const setSearchTextHandler = (searchText) => {
    dispatch({ type: "set_search_text", payLoad: searchText });
  };
  const setRadioTextHandler = (radioText) => {
    dispatch({ type: "set_radio_text", payLoad: radioText });
  };

  ////Filter
  const filterRecipesHandler = (searchText) => {
    dispatch({ type: "filter_recipes", payLoad: searchText });
  };

  //other handlers
  const editRecipeHandler = (updatedRecipe) => {
    dispatch({ type: "edit_recipe", payLoad: updatedRecipe });
  };

  return (
    <RecipeContext.Provider
      value={{
        state,
        dispatch,
        setRadioTextHandler,
        setSearchTextHandler,
        filterRecipesHandler,
        editRecipeHandler,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider };
export const useRecipe = () => useContext(RecipeContext);
