import { Ingredient } from "./ingredient.model";
import { IngredientTag } from "./ingredient_tag.model";
import { Recipe } from "./recipe.model";
import { RecipePart } from "./recipe_part.model";
import { RecipePartIngredient } from "./recipe_ingredient.model";
import { RecipeRating } from "./recipe_rating.model";
import { RecipeStep } from "./recipe_step.model";
import { RecipeStepIngredient } from "./recipe_step_ingredient.model";
import { RecipeStepTool } from "./recipe_step_tool.model";
import { Tag } from "./tag.model";
import { Tool } from "./tool.model";
import { UnitOfMeasure } from "./unit_of_measure.model";
import { User } from "./user.model";


// This index is for allowing to import any model from one place,
// instead of hunting down individual files
// When creating a new model - add it here

export {
    Ingredient,
    IngredientTag,
    Recipe,
    RecipePart,
    RecipePartIngredient,
    RecipeRating,
    RecipeStep,
    RecipeStepIngredient,
    RecipeStepTool,
    Tag,
    Tool,
    UnitOfMeasure,
    User
}