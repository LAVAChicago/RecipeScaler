CREATE ROLE rsdb_admin WITH SUPERUSER;
ALTER ROLE rsdb_admin WITH CREATEDB;
ALTER ROLE rsdb_admin WITH CREATEROLE;
ALTER ROLE rsdb_admin WITH LOGIN;
ALTER ROLE rsdb_admin WITH PASSWORD 'wert66';
CREATE database rsdb;
GRANT ALL PRIVILEGES ON DATABASE rsdb TO rsdb_admin;
