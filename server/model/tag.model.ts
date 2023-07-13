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

/*
Ingredient tags are things like "dairy", "gluten", "meat", and other identifiers
for dietary restrictions that should help search and filtering.
*/

@Table(
    {
        tableName: 'tag',
        timestamps: true
    }
)

export class Tag extends Model<Tag>{
    @AutoIncrement
    @PrimaryKey
    @Column
    tag_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING(50))
    tag_name: string

    @AllowNull(false)
    @NotEmpty
    @Column
    tag_description: string
}