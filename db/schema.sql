-- Resetting values in database if one exists -- 
DROP DATABASE IF EXISTS burgers_db;

-- Creating new database --
CREATE DATABASE burgers_db;

USE burgers_db;

-- Creating the burgers table --
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);