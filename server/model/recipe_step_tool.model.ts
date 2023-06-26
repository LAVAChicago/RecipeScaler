// JOINER TABLE. May not be necessary in Sequelize

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
    RecipeStep,
    Tool
} from "./model.index";

@Table(
    {
        tableName: 'recipe_step_tool',
        timestamps: true
    }
)

export class RecipeStepTool extends Model<RecipeStepTool>{
    @AutoIncrement
    @PrimaryKey
    @Column
    recipe_step_tool_id!: number

    @ForeignKey(() => RecipeStep)
    @Column
    recipe_step_id: number

    @BelongsTo(() => RecipeStep)
    recipe_step: RecipeStep
    
    @ForeignKey(() => Tool)
    @Column
    tool_id: number

    @BelongsTo(() => Tool)
    tool: Tool

}