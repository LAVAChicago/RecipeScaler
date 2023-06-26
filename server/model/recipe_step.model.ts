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
    RecipePart,
    RecipeIngredient,
    RecipeStepIngredient,
    RecipeStepTool,
    Tool
} from "./model.index";

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

    @ForeignKey(() => RecipePart)
    @Column
    recipe_part_id!: number;

    @BelongsTo(() => RecipePart)
    recipe_part: RecipePart;

    @AllowNull(false)
    @NotEmpty
    @Column
    recipe_step_description: string

    @BelongsToMany(() => Tool, () => RecipeStepTool)
    tools: Tool[]

    @BelongsToMany(() => RecipeIngredient, () => RecipeStepIngredient)
    recipe_ingredients: RecipeIngredient[]
}