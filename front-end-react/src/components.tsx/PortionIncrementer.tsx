import * as React from 'react';
// import "../index.css"


// interface Recipe {
//     id: number,
//     recipeTitle: string
// }

// interface RecipeIngredient {
//     id: number,
//     ingredientName: string,
//     quantity: number,
//     unit: string,
//     recipe: Recipe
// }

export default class PortionCounter extends React.Component {
    state = {
        count: 1,
        selectedRecipe: null,
        ingredients: {}
    };

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
        return (
            <>
                <div>
                    <h1 className="font-bold text-center pt-6 text-3xl">No-knead Bread</h1>
                </div>
                <div className="flex justify-center">
                    <table className="table-auto border-collapse border border-slate-400 m-0">
                        <caption className="caption-top">
                            <p className="py-6 justify-center">
                                <span className="rounded-md bg-gray-50 mx-3 px-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                                    bread
                                </span>
                                <span className="rounded-md bg-red-50 mx-3 px-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                                    simple
                                </span>
                                <span className="rounded-md bg-yellow-50 mx-3 px-2 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                    contains: gluten
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
                                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => this.setState({ count: 1 })}>
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