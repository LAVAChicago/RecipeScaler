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
    Product,
    Tag
} from "./model.index";

@Table(
    {
        tableName: 'product_tag',
        timestamps: true
    }
)

export class ProductTag extends Model<ProductTag>{
    @AutoIncrement
    @PrimaryKey
    @Column
    product_tag_id!: number

    @ForeignKey(() => Product)
    @Column
    product_id!: number;

    @BelongsTo(() => Product)
    product: Product;

    @ForeignKey(() => Tag)
    @Column
    tag_id!: number;

    @BelongsTo(() => Tag)
    tag: Tag;
}