DROP DATABASE IF EXISTS playlist_db;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (title, artist, genre) VALUES 
("Voices", "Against the Current", "Alternative"),
("Giants", "True Damage", "Hip-Hop/Rap"),
("Phoenix", "Chrissy Costanza, Cailin Russo", "Pop");
-- log into mysql command :
-- mysql -u root -p

-- run your sql seed file
-- mysql> source playlist_db.sql

-- quit mysql to run your js file
-- mysql> quit

-- run the js file
-- C:{path}> node index.js