CREATE TABLE users (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE workouts (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    userid INTEGER NOT NULL,
    activity VARCHAR(30) NOT NULL,
    duration VARCHAR(30) NOT NULL,
    date_ VARCHAR(30) NOT NULL, 
    createdAt datetime,
    updatedAt datetime

);