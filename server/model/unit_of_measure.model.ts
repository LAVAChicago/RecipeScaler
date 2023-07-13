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

/*
(TODO) This is very likely going to need a helper table with conversion
rates. Figure out how to implement. Use external library?
*/

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
    unit_name: string // <<--- "gram", "pound", "cup", "teaspoon", etc.
    // (TODO): Full name vs shortened name? I.e. "pound" vs. "lb"

    @AllowNull(false)
    @NotEmpty
    @Column
    unit_type: string // <<--- "mass", "volume", "piece"

    @AllowNull(true)
    @Default(true)
    @Column
    ismetric: boolean  // <<--- (TODO) How useful this is going to be is yet
    // to be determined. Freaking imperial system...
}