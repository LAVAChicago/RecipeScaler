"use client"

import { useState } from "react"

type RecipeProps = {
    id: number
    recipeTitle: string
    servingScale: number
}[]

type RecipeIngredientProps = {
    id: number
    ingredientName: string
    quantity: number
    unit: string
}[]

async function getRecipes(): Promise<RecipeProps> {
    const res = await fetch(`${process.env.BASE_URL}/api/getRecipes`)
    if (!res.ok) {
        throw new Error("failed to fetch recipes")
    }
    return res.json()
}


export default async function Recipe() {
    const data = await getRecipes()

    const [recipeTitle, setRecipeTitle] = useState<string | null>("")

    const changeRecipeTitle = () => {
        setRecipeTitle(null)
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
