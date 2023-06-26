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
    rating!: number;

    @Column
    comment: string;
}