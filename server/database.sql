CREATE DATABASE assignment;

--Command "\c assignment" to connect database.

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);