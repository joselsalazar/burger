-- INSERTS
INSERT INTO burgers (name) VALUES ('Double Cheeseburger');
INSERT INTO burgers (name) VALUES ('Chicken Sandwich');
INSERT INTO burgers (name) VALUES ('Big Mac');
INSERT INTO burgers (name) VALUES ('Quarter Pounder with Cheese');
INSERT INTO burgers (name) VALUES ('Royale with Cheese');

INSERT INTO eatenBurgers (name) VALUES ('Rally\'s Burger');

-- MERGES (DO NOT RUN)

INSERT INTO eatenBurgers SELECT * FROM burgers WHERE burgers.id = 6 DELETE FROM burgers WHERE burgers.id = 6;