import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    NotEmpty,
    AllowNull,
    ForeignKey,
    HasMany,
    BelongsTo
} from "sequelize-typescript"

import {
    Recipe,
    RecipePartIngredient,
    RecipeStep
} from "./model.index"

/*
Not part of the original ERD, this table is still necessary, as many recipes
are made up of several - sometimes interchangeable - parts and have their
ingredients listed in sections i.e.:
Pizza:
    1. Crust
        ( Flour, salt, yeast, water)
    2. Sauce
        ( Tomatoes, salt, pepper, basil, oregano, garlic )
    3. Toppings
        ( Mozzarella, sausage, onion, parmesan )

When a recipe isn't split into part (i.e. KOVRIJKA, where you mix everything
together and bake), we still create a single record on this table 
*/

@Table(
    {
        tableName: "recipe_part",
        timestamps: true
    }
)
export class RecipePart extends Model<RecipePart>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_part_id!: number;
    
    @ForeignKey(() => Recipe)
    @Column
    recipe_id!: number;

    @BelongsTo(() => Recipe)
    recipe: Recipe;

    @HasMany(() => RecipePartIngredient)
    recipe_ingredients: RecipePartIngredient[]

    @AllowNull(false)
    @Column
    recipe_part_number: number // <<---- Essentially index in parts array.
    // Zero-indexed, autoincremented. SOMEHOW. (TODO) Validation.

    @Column
    recipe_part_title: string // <<---- Cannot be null if more than one part.
    // (TODO) Figure out a way to add a DB contraint
}