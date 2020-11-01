DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

-- auction_category = item, task, job, project
CREATE TABLE auction (
  id INT NOT NULL AUTO_INCREMENT,
  auction_category VARCHAR(45) NOT NULL,
  auction_name VARCHAR(45) NOT NULL,
  highest_bid VARCHAR(45) NULL,
  bidder_id VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE bidder (
  id INT NOT NULL AUTO_INCREMENT,
  bidder_name VARCHAR(45) NOT NULL,
  currency INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO bidder (bidder_name, currency) VALUES 
("Devin", 7777777),
("Eris", 26783),
("Issy", 23983);

INSERT INTO auction (auction_category, auction_name) VALUES
("item", "laptop"),
("task", "update readme"),
("job", "Git Master"),
("project", "SSO");

-- log into mysql command :
-- mysql -u root -p

-- run your sql seed file
-- mysql> source greatbay_db.sql

-- quit mysql to run your js file
-- mysql> quit

-- run the js file
-- C:{path}> node index.js