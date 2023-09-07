import * as React from "react";
// import "../index.css"


// type Recipe = {
//     id: number,
//     recipe_name: string
// }

// interface RecipeIngredient {
//     id: number,
//     ingredientName: string,
//     quantity: number,
//     unit: string,
//     recipe: Recipe
// }

export default class RecipePage extends React.Component {
    state = {
        originalPortionSize: 1,
        count: 1,
        selectedRecipeID: 1,
        ingredients: {},
        steps: {},

        recipe: {},
        recipeName: "",
        recipeResponse: {},
        chefNotes: "",
        recipeType: "",
        createdByUserID: 0,

        chef: {},
        chefFirstName: "",
        chefLastName: ""
    };

    fetchRecipeByID(selectedRecipeID: number) {
        fetch(`http://localhost:5000/api/recipe/${selectedRecipeID}`)
            .then(res => res.json())
            .then(res => this.setState({
                recipe: res,
                recipeName: res.recipe_name,
                chefNotes: res.chefs_notes,
                recipeType: res.recipe_type,
                originalPortionSize: res.portions,
                count: res.portions,
                createdByUserID: res.creating_user_id
            }))
            .then(() => this.fetchUserInfoForRecipe())
    }

    fetchUserInfoForRecipe() {
        if (this.state.createdByUserID !== 0) {
            fetch(`http://localhost:5000/api/user/${this.state.createdByUserID}`)
            .then(res => res.json())
            .then(res => this.setState({
                chef: res,
                chefFirstName: res.first_name,
                chefLastName: res.last_name
            }))
        }
    }

    componentDidMount = () => {
        this.fetchRecipeByID(this.state.selectedRecipeID)
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    };

    decrement = () => {
        if (this.state.count > 1) {
            this.setState({
                count: (this.state.count - 1)
            });
        }
    };

    //   updateIngredientQuantities = () => {}

    render() {
        // console.log(this.state.chef)
        let originalPortionSize = this.state.originalPortionSize

        return (
            <>
                <div className="">
                    <h1 className="font-bold text-center py-6 text-3xl">{this.state.recipeName}</h1>
                    <p className="text-center font-medium text-gray-600">Chef {this.state.chefFirstName} {this.state.chefLastName} says: "{this.state.chefNotes}"</p>
                </div>
                <div className="flex justify-center">
                    <table className="table-auto border-collapse border border-slate-400 m-0">
                        <caption className="caption-top">
                            <p className="py-6 justify-center">
                                <span className="rounded-md bg-gray-50 mx-3 px-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    {this.state.recipeType}
                                </span>
                            </p>
                            <p className="pt-6 justify-center mb-2 text-2xl">
                                Portion Size: {this.state.count}
                            </p>
                            <p className="py-6 justify-center">
                                <span>
                                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={this.increment}>
                                        +
                                    </button>
                                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={this.decrement}>
                                        -
                                    </button>
                                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => this.setState({ count: originalPortionSize })}>
                                        Reset
                                    </button>
                                </span>       
                            </p>     
                        </caption>
                        <thead>
                            <tr>
                                <th className="border border-slate-300 p-3">Quantity</th>
                                <th className="border border-slate-300 p-3">Unit</th>
                                <th className="border border-slate-300 p-3">Ingredient</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-3">{this.state.count * 20}</td>
                                <td className="border border-slate-300 p-3">grams</td>
                                <td className="border border-slate-300 p-3">Sugar</td>

                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-3">{this.state.count * 77}</td>
                                <td className="border border-slate-300 p-3">grams</td>
                                <td className="border border-slate-300 p-3">Spice</td>
                            </tr>
                                <tr>
                                <td className="border border-slate-300 p-3">{this.state.count * 93}</td>
                                <td className="border border-slate-300 p-3">cups</td>
                                <td className="border border-slate-300 p-3">Everything Nice</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </>
        );
    }
}