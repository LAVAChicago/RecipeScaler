import { Sequelize } from 'sequelize-typescript'
import * as models from "../model/model.index";

export const connect = () => {

    const database = process.env.DB;
    const hostName = process.env.DB_HOST;
    const userName = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const dialect: any = process.env.DB_DIALECT;
    const port: any = process.env.DB_PORT;

    const operatorsAliases: any = false;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        define: {
            "createdAt": "createdat",
            "updatedAt": "updatedat"
        },
        operatorsAliases,
        repositoryMode: true,
        port: port,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    // All models in use must be added here
    sequelize.addModels([
        models.Ingredient,
        models.IngredientTag,
        models.Recipe,
        models.RecipePart,
        models.RecipeRating,
        models.RecipePartIngredient,
        models.RecipeRating,
        models.RecipeStepIngredient,
        models.RecipeStepTool,
        models.RecipeStep,
        models.Tag,
        models.Tool,
        models.UnitOfMeasure,
        models.User
    ]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}