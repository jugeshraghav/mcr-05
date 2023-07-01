import { NavLink } from "react-router-dom";
import "../App.css";
export const RecipeCard = ({ recipe }) => {
  const { cuisine, title, image } = recipe;
  const getStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: "black",
    };
  };
  console.log(cuisine);
  return (
    <>
      <div className="recipe-card-container">
        <img src={image} alt={cuisine} />
        <p className="recipe-title">{title}</p>
        <div>
          <p className="recipe-sub-title">Cuisine Type :</p>
          <p>{cuisine}</p>
        </div>
        <div>
          <p className="recipe-sub-title">Ingredients :</p>
          <NavLink style={getStyle} to={`/recipe/${title}`}>
            <p className="recipe-card-links-to-recipe">See Recipe</p>
          </NavLink>
        </div>
        <div>
          <p className="recipe-sub-title">Instructions:</p>
          <NavLink style={getStyle} to={`/recipe/${title}`}>
            <p className="recipe-card-links-to-recipe">See Recipe</p>
          </NavLink>
        </div>
        <div className="recipe-card-icons-container"></div>
      </div>
    </>
  );
};
