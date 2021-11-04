DROP DATABASE IF EXISTS todoHooks;

CREATE DATABASE todoHooks;

USE todoHooks;

CREATE TABLE shoppingList {
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    PRIMARY KEY (id)
};

INSERT INTO shoppingList (name, quantity) VALUES ("water", 12.45);
INSERT INTO shoppingList (name, quantity) VALUES ("office chair", 24.99);
INSERT INTO shoppingList (name, quantity) VALUES ("gift card", 50.00);
INSERT INTO shoppingList (name, quantity) VALUES ("candy", 1.99);