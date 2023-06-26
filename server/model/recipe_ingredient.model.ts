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
    Product,
    UnitOfMeasure
} from "./model.index";

@Table(
    {
        tableName: 'recipe_ingredient',
        timestamps: true
    }
)

export class RecipeIngredient extends Model<RecipeIngredient>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_ingredient_id!: number

    @ForeignKey(() => RecipePart)
    @Column
    recipe_part_id!: number;

    @BelongsTo(() => RecipePart)
    recipe_part: RecipePart;
    
    @ForeignKey(() => Product)
    @Column
    product_id!: number;

    @BelongsTo(() => Product)
    product: Product;    

    @ForeignKey(() => UnitOfMeasure)
    unit_of_measure_id!: number

    @BelongsTo(() => UnitOfMeasure)
    unit_of_measure: UnitOfMeasure

    @AllowNull(true)
    @Column(DataType.DECIMAL)
    amount: number

    @AllowNull(false)
    @Default(false)
    @Column
    ingredient_optional: boolean

    @AllowNull(true)
    @Column
    amount_is_approximate: boolean
}