import { RecipeCard } from "../components/RecipeCard";
import { useRecipe } from "../index";

export const Home = () => {
  const { state } = useRecipe();
  console.log(state);
  return (
    <>
      <h1>All Recipes</h1>
      <div className="all-recipe-container">
        {state?.allRecipes?.map((recipe) => (
          <RecipeCard recipe={recipe} />
        ))}
      </div>
    </>
  );
};
