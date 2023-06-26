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
    RecipeIngredient,
    RecipeStep
} from "./model.index"

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

    @HasMany(() => RecipeIngredient)
    recipe_ingredients: RecipeIngredient[]

    @HasMany(() => RecipeStep)
    recipe_steps: RecipeStep[]

    @Column
    recipe_part_number: number

    @Column
    recipe_part_title: string
}