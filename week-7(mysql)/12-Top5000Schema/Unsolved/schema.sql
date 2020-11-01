DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    position INT NOT NULL,
    artist VARCHAR(200) NULL,
    title VARCHAR(255) NULL,
    year INT NULL,
    raw_total DECIMAL(10, 4) NULL,
    us_total DECIMAL(10, 4) NULL,
    uk_total DECIMAL(10, 4) NULL,
    eu_total DECIMAL(10, 4) NULL,
    other_total DECIMAL(10, 4) NULL,
    PRIMARY KEY(position)
);
