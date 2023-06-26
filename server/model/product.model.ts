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
    HasMany,
    BelongsToMany,
    NotEmpty
} from "sequelize-typescript";

import {
    ProductTag,
    Tag
} from "./model.index";

@Table(
    {
        tableName: 'product',
        timestamps: true
    }
)

export class Product extends Model<Product>{
    @AutoIncrement
    @PrimaryKey
    @Column
    product_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING(50))
    product_name!: string
    
    @AllowNull(true)
    @NotEmpty
    @Column
    product_description!: string

    @BelongsToMany(() => Tag, () => ProductTag)
    product_tags: Tag[]
}