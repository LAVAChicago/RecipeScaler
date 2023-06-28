// JOINER TABLE. May not be necessary in Sequelize

import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    Default,
    DataType,
    ForeignKey,
    BelongsTo,
    NotEmpty
} from "sequelize-typescript";

import {
    RecipeIngredient,
    RecipeStep,
} from "./model.index";

/*
Join table for Many-to-Many connection between steps and ingredients.
The idea is to be able to id what ingredient is being used at what stage.
(TODO) This connection may be unnecessary or could work better as a
link between step and ingredient instead. Try out and decide.
*/

@Table(
    {
        tableName: 'recipe_step_ingredient',
        timestamps: true
    }
)

export class RecipeStepIngredient extends Model<RecipeStepIngredient>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_step_ingredient_id!: number

    @ForeignKey(() => RecipeIngredient)
    @Column
    recipe_ingredient_id!: number

    @BelongsTo(() => RecipeIngredient)
    recipe_ingredient: RecipeIngredient

    @ForeignKey(() => RecipeStep)
    @Column
    recipe_step_id!: number

    @BelongsTo(() => RecipeStep)
    recipe_step: RecipeStep
}