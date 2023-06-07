"use client"

import { useState } from "react"

interface Recipe {
    id: number,
    recipeTitle: string,
    servingScale: number
}[]

interface RecipeIngredient {
    id: number,
    ingredientName: string,
    quantity: number,
    unit: string
}[]

async function getRecipes(): Promise<RecipeProps> {
    const res = await fetch(`${process.env.BASE_URL}/api/getRecipes`)
    if (!res.ok) {
        throw new Error("failed to fetch recipes")
    }
    return res.json()
}

const Recipe = async () => {
    const data = await getRecipes()

    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
    const [ingredients, setIngredients] = useState<RecipeIngredient[] | null>(null)

    // const updateRecipeIngredients = (ingredients) = {

    // }

    const updateIngredientQuantities = (count: Number) => {
        // RecipeIngredient.quantity * count
    }    

    return (
        <main>
            <div>
                {data.map((recipe) => (
                    <h1 key={recipe.id}>{recipe.recipeTitle}</h1>
                ))}
            </div>
        </main>

    )
}

export default Recipe