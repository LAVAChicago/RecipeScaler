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
2. in commnand line/bash shell:

        docker pull postgres:alpine
        docker run --name recipe_scaler_db -e POSTGRES_PASSWORD=adrienandrealindsay -d -p 5432:5432 postgres:alpine 
        sudo -u postgres psql -c 'create database test;'


        docker exec -it recipe_scaler_db bash -c "sudo -u postgres psql -c 'create user  -s -i -d -r -l -w rsdb_admin ;'"
        docker exec -it recipe_scaler_db bash -c "
                sudo -u postgres psql -c 'ALTER ROLE rsdb_admin WITH PASSWORD 'wert66';'
        "
        docker exec -it recipe_scaler_db bash -c "
                sudo -u postgres createdb rsdb -O rsdb_admin;'
        "
        
        docker exec -it recipe_scaler_db bash -c 'psql -U postgres'