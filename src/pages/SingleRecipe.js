import { NavLink, useParams } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { useRecipe } from "../contexts/RecipeContext";
export const SingleRecipe = () => {
  const { recipeId } = useParams();
  const { state } = useRecipe();
  // console.log(recipeId);
  const recipeToBeDisplayed = state?.allRecipes?.find(
    ({ id }) => id === recipeId
  );

  return (
    <>
      <div className="single-recipe-header">
        <NavLink style={{ color: "black" }} to="/">
          <BsArrowLeftCircle className="single-recipe-header-icon" />
        </NavLink>
        <p className="single-recipe-header-title">Recipe</p>
      </div>
      <p className="single-recipe-title">{recipeToBeDisplayed?.title}</p>
      <div className="single-recipe-container">
        <img
          src={recipeToBeDisplayed?.image}
          alt={recipeToBeDisplayed?.title}
        ></img>
        <div className="single-recipe-content">
          <div className="single-recipe-content-inner-div">
            <p className="single-recipe-content-title">Cuisine :</p>
            <p>{recipeToBeDisplayed?.cuisine}</p>
          </div>
          <div>
            <p className="single-recipe-content-title">Ingredients :</p>
            <p>{recipeToBeDisplayed?.ingredients.join()}</p>
          </div>
          <div>
            <p className="single-recipe-content-title">Instructions :</p>
            <ol>
              {recipeToBeDisplayed?.instructions?.map((item) => (
                <li>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};
