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

  render () {
    return (
      <div className="font-bold text-center">
        <h1 className="text-3xl">Portion Size: {this.state.count}</h1>
        <button className="text-2xl" onClick={this.increment}>+</button>
        <span> </span>
        <span> </span>
        <button className="text-2xl" onClick={this.decrement}>-</button>
        <span> </span>
        <button onClick={() => this.setState({count: 1})}>Reset</button>
      </div>
    );
  }
}