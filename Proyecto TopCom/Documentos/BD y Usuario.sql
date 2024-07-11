CREATE DATABASE topcom;
CREATE USER 'usuarioTopcom'@'localhost' IDENTIFIED BY 'topcomPWA2020';
GRANT ALL PRIVILEGES ON topcom.* TO 'usuarioTopcom'@'localhost';
FLUSH PRIVILEGES;