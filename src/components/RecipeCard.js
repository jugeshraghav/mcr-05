import { NavLink } from "react-router-dom";
import "../App.css";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import { RecipeModal } from "./RecipeModal";
import { useRecipe } from "../contexts/RecipeContext";

export const RecipeCard = ({ recipe }) => {
  const { dispatch } = useRecipe();
  const { id, cuisine, title, image } = recipe;
  const [showModal, setShowModal] = useState(false);

  const getStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: "black",
    };
  };
  // console.log(cuisine);
  const deletRecipeHandler = (recipeToBeDeleted) => {
    dispatch({ type: "delete_recipe", payLoad: recipe });
  };
  return (
    <>
      <RecipeModal
        recipe={recipe}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
      <div className="recipe-card-container">
        <img src={image} alt={cuisine} />
        <p className="recipe-title">{title}</p>
        <div>
          <p className="recipe-sub-title">Cuisine Type :</p>
          <p>{cuisine}</p>
        </div>
        <div>
          <p className="recipe-sub-title">Ingredients :</p>
          <NavLink style={getStyle} to={`/recipe/${id}`}>
            <p className="recipe-card-links-to-recipe">See Recipe</p>
          </NavLink>
        </div>
        <div>
          <p className="recipe-sub-title">Instructions:</p>
          <NavLink style={getStyle} to={`/recipe/${id}`}>
            <p className="recipe-card-links-to-recipe">See Recipe</p>
          </NavLink>
        </div>
        <section className="recipe-card-icons-container">
          <AiFillEdit
            className="recipe-card-icon"
            onClick={() => setShowModal(true)}
          />
          <AiFillDelete
            className="recipe-card-icon"
            onClick={() => deletRecipeHandler(recipe)}
          />
        </section>
      </div>
    </>
  );
};
