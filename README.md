# RecipeScaler

Premise:
==============
An easy-to-use web/phone app that allows users to make proportionally smaller or large versions of existing recipes.

MVP:
==============
Users can choose from a list of existing recipes and adjust recipe scale by either choosing a number to multiply/divide all ingredients by, setting one of the ingredients to a certain value and having the rest adjust accordingly, or adjusting the number of portions.

Stretch goals:
==============
Ingredient unit conversion.
User registration.
Commenting on and rating recipes.
Allow users to create their own recipes.
Smart search: i.e. “Show me recipes that I could use up all this sour cream on before it expires.” or “Give me all the lactose-free desserts” etc.
Voice control? (so users don’t have to touch the phone while cooking)

Tech stack:
==============
Front-end: React, React Native, TypeScript
Back-end: NodeJS, ExpressJS, TypeScript
Database: PostgreSQL
Deployment: AWS EC2, Docker, Ubuntu 22.04 LTS


```
Testing Pushing
```


DataBase Setup
==============
1. install docker/Docker Desktop

Application Setup
==============
1. Activate bash script: `. rs.sh;`
2. Run Docker container: `live`
3. Install all dependencies: `install`

        a. Install Only Front `install-front`

        b. Install Only Back `install-back`
4. Migrate Database: `db-migrate`

**Will need to activate bash `. rs.sh;` for next steps.**

5. Run Front in separate terminal `run-front`
6. Run Server in separate terminal `run-back`
