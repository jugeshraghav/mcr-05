import { useState } from "react";
import { v4 as uuid } from "uuid";
import "../App.css";
import { useRecipe } from "../contexts/RecipeContext";
const recipeInitialDetails = {
  cuisine: "",
  title: "",
  image: "",
  ingredients: [],
  instructions: [],
};
export const RecipeModal = ({ recipe, show, onClose }) => {
  const { dispatch } = useRecipe();
  const [updatedRecipe, setUpdatedRecipe] = useState(
    recipe || recipeInitialDetails
  );
  const createRecipeHandler = (updatedRecipe) => {
    if (recipe) {
      console.log(updatedRecipe);
      dispatch({ type: "edit_recipe", payLoad: { ...updatedRecipe } });
    } else {
      dispatch({
        type: "add_recipe",
        payLoad: { ...updatedRecipe, id: uuid() },
      });
    }
    onClose();
    setUpdatedRecipe(recipeInitialDetails);
  };

  return (
    <>
      {show && (
        <div className="modal-container" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>{recipe ? "Edit Recipe" : "Create Recipe"}</p>
            <div>
              <p>Cuisine</p>
              <input
                type="text"
                value={updatedRecipe?.cuisine}
                onChange={(e) =>
                  setUpdatedRecipe((pre) => ({
                    ...pre,
                    cuisine: e.target.value,
                  }))
                }
                placeholder="Enter Cuisine name"
                required
              />
            </div>
            <div>
              <p>Title</p>
              <input
                type="text"
                value={updatedRecipe?.title}
                onChange={(e) =>
                  setUpdatedRecipe((pre) => ({
                    ...pre,
                    title: e.target.value,
                  }))
                }
                placeholder="Enter name of recipe"
                required
              />
            </div>
            <div>
              <p>Image URL</p>
              <input
                type="text"
                value={updatedRecipe?.image}
                onChange={(e) =>
                  setUpdatedRecipe((pre) => ({
                    ...pre,
                    image: e.target.value,
                  }))
                }
                placeholder="Enter image URL"
                required
              />
            </div>
            <div>
              <p>Ingredients</p>
              <textarea
                rows="5"
                columns="100"
                value={updatedRecipe?.ingredients}
                onChange={(e) =>
                  setUpdatedRecipe((pre) => ({
                    ...pre,
                    ingredients: e.target.value.split(","),
                  }))
                }
                placeholder="Enter some Ingredients"
                required
              ></textarea>
            </div>
            <div>
              <p>Instructions</p>
              <textarea
                rows="8"
                columns="100"
                value={updatedRecipe?.instructions}
                onChange={(e) =>
                  setUpdatedRecipe((pre) => ({
                    ...pre,
                    instructions: e.target.value.split("/n"),
                  }))
                }
                placeholder="Enter Some Instructions"
                required
              ></textarea>
            </div>
            <div>
              <button onClick={() => createRecipeHandler(updatedRecipe)}>
                {recipe ? "Edit" : "Create"}
              </button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
