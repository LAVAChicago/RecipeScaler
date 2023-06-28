import { connect } from "../config/db.config"
import { QueryTypes } from "sequelize";
import * as models from "../model/model.index";
import { ObjectController } from "../controller/generic.object.controller";


export class RawSQLQueries {
    public UnitsOfMeasure: string;
    public Ingredients: string;
    public User: string;
    public Recipe: string;
    public RecipeParts: string;
    public RecipeIngredients: string;
    public RecipeSteps: string;

    constructor() {
        this.User = `
            INSERT INTO rs_user (
                access_level,
                first_name,
                last_name,
                user_name,
                email,
                password,
                createdat,
                updatedat
            )
            VALUES
                ('admin', 'Vadim', 'Flaks', 'vflaks', 'vflaks@recipescaler.com', 'wert66', now(), now())
        `;
        this.UnitsOfMeasure = `
            INSERT INTO unit_of_measure (
                unit_name,
                unit_type,
                ismetric,
                createdat,
                updatedat
            )
            VALUES
                ('gram', 'mass', TRUE, now(), now()),
                ('cup', 'volume', FALSE, now(), now()),
                ('teaspoon', 'volume', FALSE, now(), now()),
                ('tablespoon', 'volume', FALSE, now(), now())
        `;
        this.Ingredients = `
            INSERT INTO ingredient (
                ingredient_name,
                ingredient_description,
                createdat,
                updatedat
            )
            VALUES
                ('eggs', 'Large chicken eggs', now(), now()),
                ('sugar', 'White granulated sugar', now(), now()),
                ('sour cream', NULL, now(), now()),
                ('condensed milk', NULL, now(), now()),
                ('cocoa powder', '100% Cocao powder', now(), now()),
                ('baking soda', NULL, now(), now()),
                ('flour', 'All-purpose flour', now(), now()),
                ('butter', NULL, now(), now()),
                ('sour cream', NULL, now(), now())
        `;
        this.Recipe = `
            INSERT INTO recipe (
                recipe_name,
                recipe_type,
                creating_user_id,
                portions,
                chefs_notes,
                createdat,
                updatedat
            )
            SELECT
                'Praga Cake',
                'desert',
                user_id,
                16,
                'Fairly easy-to-make torte.',
                now(),
                now()
            FROM rs_user
            WHERE rs_user.user_name='vflaks'
        `;
        this.RecipeParts = `
            INSERT INTO recipe_part (
                recipe_id,
                recipe_part_number,
                recipe_part_title,
                createdat,
                updatedat
            )
            SELECT
                recipe_id,
                0,
                'Sponge Cake',
                now(),
                now()
            FROM recipe
            WHERE recipe.recipe_name='Praga Cake'
            UNION
            SELECT
                recipe_id,
                1,
                'Cream',
                now(),
                now()
            FROM recipe
            WHERE recipe.recipe_name='Praga Cake'
            UNION
            SELECT
                recipe_id,
                2,
                'Ganache',
                now(),
                now()
            FROM recipe
            WHERE recipe.recipe_name='Praga Cake'
        `;
        this.RecipeIngredients = `
            INSERT INTO recipe_ingredient (
                recipe_part_id,
                ingredient_id,
                unit_of_measure_id,
                amount,
                ingredient_optional,
                amount_is_approximate,
                createdat,
                updatedat
            )
        `;
    }

    runQueries() {
        let db = connect();
        Promise.resolve(
            db.sequelize.query(
                this.User,
                { type: QueryTypes.INSERT }
            )
        ).then(
            db.sequelize.query(
                this.UnitsOfMeasure,
                { type: QueryTypes.INSERT }
            )
        ).then(
            db.sequelize.query(
                this.Ingredients,
                { type: QueryTypes.INSERT }
            )
        ).then(
            db.sequelize.query(
                this.Recipe,
                { type: QueryTypes.INSERT }
            )
        ).then(
            db.sequelize.query(
                this.RecipeParts,
                { type: QueryTypes.INSERT }
            )
            // ).then(
            //     db.sequelize.query(
            //         this.RecipeIngredients,
            //         { type: QueryTypes.INSERT }
            //     )
        ).then(() => {
            const rPartController = new ObjectController(models.RecipePart);
            rPartController.getAll().then(rParts => {
                console.log("***************************************************");
                console.log(rParts);
            });
        }
        );
    }
}