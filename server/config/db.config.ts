import { Sequelize } from 'sequelize-typescript'
import * as models from "../model/model.index";

export const connect = () => {

    const database = 'rsdb';
    const hostName = '172.20.0.2';
    const userName = 'rsdb_admin';
    const password = 'wert66';
    // const dialect = 'postgres';
    const port: any = '5432';

    const operatorsAliases: any = 0;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect: 'postgres',
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