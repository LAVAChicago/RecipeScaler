// import RecipePage from "./components.tsx/RecipePage";
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./RecipeList";
import RecipePage from "./RecipePage";
import NewRecipe from "./NewRecipe"
import "./index.css"

export default function App() {

  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<RecipeList/>} />
                <Route path="/recipe/all" element={<RecipeList/>} />
                <Route path="/recipe/new" element={<NewRecipe/>} />
            </Routes>
        </div>
    </Router>
  );
}
