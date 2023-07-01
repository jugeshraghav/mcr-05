import { useState } from "react";
import "../App.css";
import { useRecipe } from "../contexts/RecipeContext";
export const RecipeModal = ({ recipe, show, onClose }) => {
  const { editRecipeHandler } = useRecipe;
  const [updatedRecipe, setUpdatedRecipe] = useState(
    recipe
      ? recipe
      : {
          cuisine: "",
          title: "",
          ingredients: "",
          instructions: "",
        }
  );
  return (
    <>
      {show && (
        <div className="modal-container" onClick={onClose}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>Recipe</p>
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
                    ingredients: e.target.value,
                  }))
                }
                placeholder="Enter some Ingredients"
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
                    instructions: e.target.value,
                  }))
                }
                placeholder="Enter Some Instructions"
              ></textarea>
            </div>
            <div>
              <button onClick={() => editRecipeHandler(updatedRecipe)}>
                Edit
              </button>
              <button>Create</button>
              <button onClick={onClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
