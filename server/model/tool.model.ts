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

/*
Kitchen tools are most likely to be used for filtering purposes, i.e.
"I don't have access to a stand mixer now, so don't show me recipes
that absolutely require it."
*/

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