CREATE DATABASE burgers;
USE burgers;
CREATE TABLE sandwiches(
    id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (100) NOT NULL,
    eaten BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);