import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    ForeignKey,
    BelongsTo,
    NotEmpty,
    AllowNull,
} from "sequelize-typescript";

import {
    User,
    Recipe
} from "./model.index";

/*
Pretty self-explanatory. 5-star ratings and optional text reviews.
*/
@Table(
    {
        tableName: 'recipe_rating',
        timestamps: true
    }
)
export class RecipeRating extends Model<RecipeRating>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_rating_id!: number;

    @ForeignKey(() => Recipe)
    @Column
    recipe_id!: number;

    @BelongsTo(() => Recipe)
    recipe: Recipe;

    @ForeignKey(() => User)
    @Column
    userid_id!: number;

    @BelongsTo(() => User)
    user: User;

    @NotEmpty
    @AllowNull(false)
    @Column
    rating!: number; // <-- (TODO) Chose a better datatype 
    //for storing integers from 1 to 5

    @Column
    comment: string;
}