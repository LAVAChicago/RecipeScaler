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
        tableName: 'rs_user',  // PSQL preserves 'user' for its own internal use
        timestamps: true
    }
)
export class User extends Model<User>{
    @AutoIncrement
    @PrimaryKey
    @Column
    user_id!: number

    @AllowNull(false)
    @NotEmpty
    @Column
    access_level!: string

    @AllowNull(true)
    @NotEmpty
    @Column
    first_name!: string

    @AllowNull(true)
    @NotEmpty
    @Column
    last_name!: string

    @AllowNull(false)
    @NotEmpty
    @Column
    user_name!: string

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