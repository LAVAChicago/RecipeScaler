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
    Ingredient,
    Tag
} from "./model.index";

/*
Ingredient tags are things like "dairy", "gluten", "meat", and other identifiers
for dietary restrictions that should help search and filtering. This
table is purely for establishing a Many-to-Many relationship between ingredients
and tags.
*/
@Table(
    {
        tableName: 'ingredient_tag',
        timestamps: true
    }
)

export class IngredientTag extends Model<IngredientTag>{
    @AutoIncrement
    @PrimaryKey
    @Column
    ingredient_tag_id!: number

    @ForeignKey(() => Ingredient)
    @Column
    ingredient_id!: number;

    @BelongsTo(() => Ingredient)
    ingredient: Ingredient;

    @ForeignKey(() => Tag)
    @Column
    tag_id!: number;

    @BelongsTo(() => Tag)
    tag: Tag;
}