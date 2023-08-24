import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    ForeignKey,
    BelongsTo,
    NotEmpty,
    HasMany,
    BelongsToMany
} from "sequelize-typescript";

import {
    Recipe,
    RecipePartIngredient,
    RecipeStepIngredient,
    RecipeStepTool,
    Tool
} from "./model.index";

/*
Not to be confused with recipe part, although we may want to establish a
connection between the two (TODO), Recipe Steps are instructions for 
carrying out actions with tools and ingredients (or ingredients - see
recipe_step_ingredient file comment).
*/

@Table(
    {
        tableName: 'recipe_step',
        timestamps: true
    }
)

export class RecipeStep extends Model<RecipeStep>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_step_id!: number

    @ForeignKey(() => Recipe)
    @Column
    recipe_id!: number;

    @BelongsTo(() => Recipe)
    recipe_part: Recipe;

    @AllowNull(false)
    @NotEmpty
    @Column
    recipe_step_description: string

    @BelongsToMany(() => Tool, () => RecipeStepTool)
    tools: Tool[]

    @BelongsToMany(() => RecipePartIngredient, () => RecipeStepIngredient)
    recipe_ingredients: RecipePartIngredient[]
}