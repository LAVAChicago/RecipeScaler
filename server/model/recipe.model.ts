import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    NotEmpty,
    AllowNull,
    ForeignKey,
    BelongsTo,
    HasMany
} from "sequelize-typescript";

import {
    RecipePart,
    RecipeIngredient,
    RecipeRating,
    RecipeStep,
    User
} from "./model.index";

@Table(
    {
        tableName: 'recipe',
        timestamps: true
    }
)
export class Recipe extends Model<Recipe>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_id!: number;

    @NotEmpty
    @AllowNull(false)
    @Column
    recipe_name!: string;

    @NotEmpty
    @Column
    recipe_type: string;
    
    @ForeignKey(() => User)
    @Column
    creating_user_id!: number;
    
    @BelongsTo(() => User)
    creating_user!: User

    @AllowNull(true)
    @Column
    portions: number;

    @AllowNull(true)
    @Column
    chefs_notes: string;

    @AllowNull(true)
    @Column
    source_link: string;

    @HasMany(() => RecipePart)
    recipe_parts: RecipePart[]

    @HasMany(() => RecipeRating)
    recipe_ratings: RecipeRating[]
}