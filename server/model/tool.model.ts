import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    DataType,
    NotEmpty
} from "sequelize-typescript";

@Table(
    {
        tableName: 'tool',
        timestamps: true
    }
)

export class Tool extends Model<Tool>{
    @AutoIncrement
    @PrimaryKey
    @Column
    tool_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column(DataType.STRING(50))
    tool_name: string

    @AllowNull(true)
    @NotEmpty
    @Column
    tool_description: string
}