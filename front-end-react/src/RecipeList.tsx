import * as React from "react";
import { Link } from "react-router-dom";

interface Recipe {
  recipe_id: number;
  recipe_name: string;
}

export default class RecipeList extends React.Component {
    state = {
        recipes: [] as Recipe[],
    };
    
    componentDidMount = () => {
        this.fetchAllRecipes()
    }
    
    fetchAllRecipes = () => {
        fetch("http://localhost:5000/api/recipe/") // Replace with your actual API endpoint
        .then((response) => response.json())
        .then((data) => {
          this.setState({ recipes: data });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    render() {
        return (
        <>
        <h1 className="font-bold text-center py-6 text-3xl">Recipe List</h1>
        <div className="flex justify-center">
            <ul className="">
            {this.state.recipes.map((recipe) => (
                <li className="py-2" key={recipe.recipe_id}>
                    <a href="http://localhost:3000/" className="">{recipe.recipe_name}</a>
                </li>
            ))}
            </ul>
        </div>
        <h3 className="font-bold text-center py-6">
            <Link to="/recipe/new">Create New Recipe</Link>
        </h3>
        </>
        );
    }
}

