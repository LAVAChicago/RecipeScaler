import {
    Model,
    Column,
    DataType,
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
    RecipeRating,
    RecipeStep,
    User
} from "./model.index";

/*
The hub table, Recipes bring most of the crucial data via joins,
so eager loading and indexing will be key.
*/

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
    @Column(DataType.STRING(50))
    recipe_name!: string;

    @NotEmpty
    @AllowNull(true)
    @Column
    recipe_description!: string;

    @NotEmpty
    @Column
    recipe_type: string;  // <<---- "dessert", "garnish", "main cource", etc.
    
    @ForeignKey(() => User)
    @Column
    creating_user_id!: number;
    
    @BelongsTo(() => User)
    creating_user!: User

    @AllowNull(true)
    @Column
    portions: number;

    @AllowNull(true)
    @Column(DataType.REAL)
    rating_average: number;  // <<--- To be periodically recalculated
    // for scalability. Can't have the DB recalc every time someone
    // submits a new rating - too much strain coming in too rapidly.

    @AllowNull(true)
    @Column
    chefs_notes: string;  // <<--- this can be for overall description
    // of the recipe, or additional instructions, or both

    @AllowNull(true)
    @Column
    source_link: string; // <<--- a link to youtube video or cooksite page

    @HasMany(() => RecipePart)
    recipe_parts: RecipePart[] // <<--- (TODO) Figure out eager loading

    @HasMany(() => RecipeStep)
    recipe_steps: RecipeStep[]

    @HasMany(() => RecipeRating)
    recipe_ratings: RecipeRating[] // <<--- (TODO) Average rating calculation
}