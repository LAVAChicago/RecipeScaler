# RecipeScaler

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