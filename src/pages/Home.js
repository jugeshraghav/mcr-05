import { RecipeCard } from "../components/RecipeCard";
import { useRecipe } from "../index";
import "../App.css";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { RecipeModal } from "../components/RecipeModal";

export const Home = () => {
  const {
    state,
    setSearchTextHandler,
    setRadioTextHandler,
    filterRecipesHandler,
  } = useRecipe();

  // state variables
  const [inputSearchText, setInputSearchText] = useState("");
  const [selectedRadioText, setSelectedRadioText] = useState("name");
  const [showModalRecipe, setShowModalRecipe] = useState(false);

  const handleInputSearch = (e) => {
    setInputSearchText(e.target.value);
    setSearchTextHandler(inputSearchText);
    filterRecipesHandler(inputSearchText);
  };
  const handleRadioInput = (e) => {
    setSelectedRadioText(e.target.value);
    setRadioTextHandler(selectedRadioText);
  };

  console.log(state);
  return (
    <>
      <RecipeModal
        show={showModalRecipe}
        onClose={() => setShowModalRecipe(false)}
      />
      <div className="filter-container">
        <input
          type="text"
          placeholder={`Search Recipe`}
          className="search-input"
          onChange={handleInputSearch}
        />
        <div className="filter-radio-container">
          <div>
            <input
              type="radio"
              name="filter-radio"
              htmlFor="name"
              value="name"
              checked={selectedRadioText === "name"}
              onChange={handleRadioInput}
            />
            <label id="name">Name</label>
          </div>
          <div>
            <input
              type="radio"
              name="filter-radio"
              htmlFor="ingredients"
              value="ingredients"
              checked={selectedRadioText === "ingredients"}
              onChange={handleRadioInput}
            />
            <label id="ingredients">Ingredients</label>
          </div>
          <div>
            <input
              type="radio"
              name="filter-radio"
              htmlFor="instructions"
              value="instructions"
              checked={selectedRadioText === "instructions"}
              onChange={handleRadioInput}
            />
            <label id="instructions">Instructions</label>
          </div>
        </div>
      </div>
      <h1>All Recipes</h1>
      <div className="all-recipe-container">
        {state?.allRecipes?.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
        <AiFillPlusCircle
          style={{ fontSize: "30px" }}
          onClick={() => setShowModalRecipe(true)}
        />
      </div>
    </>
  );
};
