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
    IngredientTag,
    Tag
} from "./model.index";

/*
Ingredients, i.e. "eggs", "sugar", "filet mignon", "asparagus", etc. may or
may not need additional descriptions to specify particular kinds of the
same kind of foodstuff. "All-purpose flour", "Bread flour", "Whole weat
flour" and so on.
*/

@Table(
    {
        tableName: 'ingredient',
        timestamps: true
    }
)

export class Ingredient extends Model<Ingredient>{
    @AutoIncrement
    @PrimaryKey
    @Column
    ingredient_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING(50))
    ingredient_name!: string
    
    @AllowNull(true)
    @NotEmpty
    @Column
    ingredient_description: string

    @BelongsToMany(() => Tag, () => IngredientTag)
    ingredient_tags: Tag[]
}