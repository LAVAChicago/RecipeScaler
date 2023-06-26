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
            <div className="items-center text-center">
                <div>
                    <h1 className="font-bold text-center pt-6 text-3xl">No-knead Bread</h1>
                </div>
                <div>
                    <p className="py-6 justify-center">
                        <span className="inline-flex items-center rounded-md bg-gray-50 mx-3 px-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                            bread
                        </span>
                        <span className="inline-flex items-center rounded-md bg-red-50 mx-3 px-2 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                            simple
                        </span>
                        <span className="inline-flex items-center rounded-md bg-yellow-50 mx-3 px-2 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                            contains: gluten
                        </span>
                    </p>
                </div>
                <div>
                    <h1 className="mb-2 text-2xl">Portion Size: {this.state.count}</h1>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={this.increment}>+</button>
                    <span> </span>
                    <span> </span>
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={this.decrement}>-</button>
                    <span> </span>
                    <button
                        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                        onClick={() => this.setState({ count: 1 })}>Reset</button>
                </div>
                <div className="justify-center py-10">
                    <h3>For the dough:</h3>
                    <div className="grid grid-cols-3 gap-4 place-content-center">
                        <div className='text-right'>{this.state.count * 4}</div>
                        <div className='text-center'>grams</div>
                        <div className='text-left'>bread flour</div>

                        <div className='text-right'>{this.state.count * 2.5}</div>
                        <div className='text-center'>grams</div>
                        <div className='text-left'>yeast</div>
                    </div>
                </div>
            </div>
        );
    }
}