import {
    Model,
    Column,
    Table,
    AutoIncrement,
    PrimaryKey,
    NotEmpty,
    AllowNull,
    Unique
} from "sequelize-typescript";

@Table(
    {
        tableName: 'user',
        timestamps: true
    }
)
export class User extends Model<User>{
    @AutoIncrement
    @PrimaryKey
    @Column
    user_id!: number

    @AllowNull(true)
    @NotEmpty
    @Column
    firstname!: string

    @AllowNull(true)
    @NotEmpty
    @Column
    lastname!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    username!: string

    @Unique(true)
    @AllowNull(false)
    @NotEmpty
    @Column
    email!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    password!: string
}