DROP DATABASE IF EXISTS beyonddj_db;

CREATE DATABASE beyonddj_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(20) NOT NULL,
    role VARCHAR(20) NOT NULL,
    firstName VARCHAR(20) NOT NULL,
    lastName VARCHAR(20) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    picture VARCHAR(20) NULL,
    genres VARCHAR(20) NOT NULL,
    eventType VARCHAR(20) NOT NULL,
    summary VARCHAR(20) NULL,
    links VARCHAR(20) NULL,
    genre VARCHAR(20) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE events(
    id INT NOT NULL AUTO_INCREMENT,
    eventName VARCHAR(20) NOT NULL,
    street VARCHAR(20) NOT NULL,
    city VARCHAR(20) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    booked BOOLEAN 
    PRIMARY KEY (id)
);

