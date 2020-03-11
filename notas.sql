create database notas;
use notas;

create table nota(
id int auto_increment primary key,
titulo varchar(100),
nota varchar(10000),
fecha_creacion date
);