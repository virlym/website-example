-- Drops the quotes_db if it already exists --
DROP DATABASE IF EXISTS quotes_db;

-- Create the database quotes_db and specified it for use.
CREATE DATABASE quotes_db;

USE quotes_db;

CREATE TABLE quotes
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
	quote TEXT NOT NULL,
	PRIMARY KEY (id)
);
