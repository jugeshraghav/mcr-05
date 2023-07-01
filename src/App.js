import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { SingleRecipe } from "./pages/SingleRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<SingleRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
