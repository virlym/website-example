DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE chirps (
  id INT NOT NULL AUTO_INCREMENT,
  author VARCHAR(150) NOT NULL,
  chirp VARCHAR(150) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

SET @@time_zone = 'SYSTEM';

INSERT INTO chirps (author, chirp, created_at) VALUES ("Devin", "Hello World", (SELECT CURRENT_TIMESTAMP()));