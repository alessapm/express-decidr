BEGIN TRANSACTION;

-- ***not sure if anything of this part works-
 -- we might need to call create local databases
-- how did we do external database for project 2?

-- DROP DATABASE IF EXISTS decidr;

-- CREATE DATABASE decidr;

-- \c decidr;

DROP TABLE IF EXISTS favorties;
DROP TABLE IF EXISTS users;


CREATE TABLE IF NOT EXISTS users
 (id BIGSERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);



CREATE TABLE IF NOT EXISTS favorites
  (id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(255) NOT NULL,
  lat VARCHAR(255) NOT NULL,
  lng VARCHAR(255) NOT NULL,
  price_level VARCHAR(255),
  formatted_address VARCHAR(255) NOT NULL,
  rating DECIMAL NOT NULL,
  comment TEXT
);


COMMIT;
