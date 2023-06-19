import { Sequelize } from 'sequelize-typescript'
import * as models from "../model/model.index";

export const connect = () => {

    const database = process.env.DB;
    const hostName = process.env.DB_HOST;
    const userName = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const dialect: any = process.env.DB_DIALECT;

    console.log('dialect  ', dialect)

    const operatorsAliases: any = false;

    const sequelize = new Sequelize(database, userName, password, {
        host: hostName,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    });

    sequelize.addModels([
        models.User,
        models.Recipe,
        models.RecipeRating
    ]);

    const db: any = {};
    db.Sequelize = Sequelize;
    db.sequelize = sequelize;
    
    return db;

}