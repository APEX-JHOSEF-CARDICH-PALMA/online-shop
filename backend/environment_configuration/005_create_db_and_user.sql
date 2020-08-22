--  Script to create database for application and assign it to specific user with granted permissions.
--	execute in mysql console logged as administrator (root)
--  dbname -> online_shop | dbuser -> osuser | dbuser_password -> not filled
--
-- @@password - replace this with your password you want to use, don't commit passwords to remote Git repository!
--

CREATE DATABASE online_shop;
CREATE USER osuser@'localhost' IDENTIFIED BY @@password;
GRANT SELECT, INSERT, UPDATE ON online_shop.* TO osuser@'localhost';