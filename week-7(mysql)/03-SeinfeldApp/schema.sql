-- Drops the seinfeld_app_db if it already exists --
DROP DATABASE IF EXISTS seinfeld_app_db;

-- Created the DB "seinfeld_app_db" (only works on local connections)
CREATE DATABASE seinfeld_app_db;

-- Use the DB seinfeld_app_db for all the rest of the script
USE seinfeld_app_db;

-- Created the table "characters"
CREATE TABLE characters (
  id INT AUTO_INCREMENT NOT NULL,
  char_name VARCHAR(30) NOT NULL,
  cool INT NOT NULL,
  attitude VARCHAR(30) NOT NULL,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO characters (char_name, cool, attitude)
VALUES ("Kirstin", 11, "Shitty");

INSERT INTO characters (char_name, cool, attitude)
VALUES ("Issy", 8, "Awesome");

INSERT INTO characters (char_name, cool, attitude)
VALUES ("Carby", 6, "Awesome");

INSERT INTO characters (char_name, cool, attitude)
VALUES ("Katrina", 5, "Shitty");
