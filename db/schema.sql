DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;
USE techblog_db;
CREATE TABLE IF NOT EXISTS user(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
username VARCHAR(30) NOT NULL UNIQUE,
password VARCHAR(30) NOT NULL
);
CREATE TABLE IF NOT EXISTS post(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(30) NOT NULL,
body VARCHAR(10000) NOT NULL,
date DATE NOT NULL,
poster VARCHAR(30) NOT NULL,
FOREIGN KEY (poster) REFERENCES user (username),
poster_id INTEGER NOT NULL UNIQUE,
FOREIGN KEY (poster_id) REFERENCES user(id) 
);
CREATE TABLE IF NOT EXISTS comment(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
body VARCHAR(10000) NOT NULL,
date DATE NOT NULL,
commenter VARCHAR(30) NOT NULL,
FOREIGN KEY (commenter) REFERENCES user (username),
post_id INTEGER NOT NULL UNIQUE,
FOREIGN KEY (post_id) REFERENCES post(id) 
);