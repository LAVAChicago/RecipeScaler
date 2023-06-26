import { Product } from "./product.model";
import { ProductTag } from "./product_tag.model";
import { Recipe } from "./recipe.model";
import { RecipePart } from "./recipe_part.model";
import { RecipeIngredient } from "./recipe_ingredient.model";
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
    Product,
    ProductTag,
    Recipe,
    RecipePart,
    RecipeIngredient,
    RecipeRating,
    RecipeStep,
    RecipeStepIngredient,
    RecipeStepTool,
    Tag,
    Tool,
    UnitOfMeasure,
    User
}