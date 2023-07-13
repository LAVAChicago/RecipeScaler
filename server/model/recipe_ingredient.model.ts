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
    BelongsTo
} from "sequelize-typescript";

import {
    RecipePart,
    Ingredient,
    UnitOfMeasure
} from "./model.index";

@Table(
    {
        tableName: 'recipe_ingredient',
        timestamps: true
    }
)

/*
Despite having "Recipe" in the name, this table is actually linked to the
RecipePart. This is the meat of the app, where the amounts we are scaling
actually live.
*/

export class RecipePartIngredient extends Model<RecipePartIngredient>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_part_ingredient_id!: number

    @ForeignKey(() => RecipePart)
    @Column
    recipe_part_id!: number;

    @BelongsTo(() => RecipePart)
    recipe_part: RecipePart;
    
    @ForeignKey(() => Ingredient)
    @Column
    ingredient_id!: number;

    @BelongsTo(() => Ingredient)
    ingredient: Ingredient;    

    @ForeignKey(() => UnitOfMeasure)
    unit_of_measure_id!: number

    @BelongsTo(() => UnitOfMeasure)
    unit_of_measure: UnitOfMeasure

    @AllowNull(true)
    @Column(DataType.DECIMAL)
    amount: number // <<-------- Important, but still nullable. Null means "to taste"

    @AllowNull(false)
    @Default(false)
    @Column
    ingredient_optional: boolean

    @AllowNull(true)
    @Column
    amount_is_approximate: boolean
}