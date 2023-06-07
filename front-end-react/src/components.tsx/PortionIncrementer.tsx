import { useState } from "react"
import updateIngredientQuantities from "./Recipe";


const portionCounter = () => {
    const [count, setCount] = useState(0);

    const adjustPortion = (adjustmentType: string) => {
        if (adjustmentType === "increment") {
            setCount(prev => prev + 1)
        } else if (adjustmentType === "decrement") {
            setCount(prev => prev + 1)
        }
        updateRecipeQuantities(count)
    }

    const updateRecipeQuantities = (count: Number) => {
        updateIngredientQuantities(count)
    }

    return (
        <section>
            <h1>{count}</h1>
            <div className="row">
                <button onClick={adjustPortion("increment")}>+</button>
                <button onClick={adjustPortion("decrement")}>-</button>
            </div>
            <div className="row">
                <button onClick={() => setCount(1)}>Reset</button>
            </div>
        </section>
    )
}

export default portionCounter
