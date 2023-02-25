DROP TABLE IF EXISTS `votante`;
CREATE TABLE votante (
    votante_id int NOT NULL AUTO_INCREMENT,
    nombre_apellido varchar(255) NOT NULL,
    alias varchar(255) NOT NULL,
    rut varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    region varchar(255) NOT NULL,
    comuna varchar(255) NOT NULL,
    candidato varchar(255) NOT NULL, 
    web bit,
    tv bit,
    redes bit,
    amigo bit,
    PRIMARY KEY (votante_id)
); 

DROP TABLE IF EXISTS `regiones`;
CREATE TABLE regiones (
    region_id int NOT NULL AUTO_INCREMENT,
    nombre_region varchar(255) NOT NULL,
    PRIMARY KEY (region_id)
); 

DROP TABLE IF EXISTS `comunas`;
CREATE TABLE comunas (
    comuna_id int NOT NULL AUTO_INCREMENT,
    region_id int NOT NULL,
    nombre_comuna varchar(255) NOT NULL,
    PRIMARY KEY (comuna_id)
); 

DROP TABLE IF EXISTS `candidato`;
CREATE TABLE candidato (
    candidato_id int NOT NULL AUTO_INCREMENT,
    nombre_candidato varchar(255) NOT NULL,
    PRIMARY KEY (candidato_id)
); 