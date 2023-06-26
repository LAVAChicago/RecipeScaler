import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    Default,
    NotEmpty
} from "sequelize-typescript";

@Table(
    {
        tableName: 'unit_of_measure',
        timestamps: true
    }
)

export class UnitOfMeasure extends Model<UnitOfMeasure>{
    @AutoIncrement
    @PrimaryKey
    @Column
    unit_of_measure_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    unit_name: string

    @AllowNull(false)
    @NotEmpty
    @Column
    unit_type: string

    @AllowNull(true)
    @Default(true)
    @Column
    ismetric: boolean
}