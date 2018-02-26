create database mono 

use mono 

create table contribuyente (
	id_contribuyente numeric primary key identity,
	identificacion numeric,
	tipo_identificacion varchar(150),
	nombres_contribuyente varchar(200),
	apellidos_contribuyente varchar(200),
	correo varchar(200),
	direccion varchar(200),
	telefono varchar(50),
	usuario varchar(100),
	contrasena varchar(100)
)

create table comercio (
	id_comercio numeric primary key identity,
	nombre_comercio varchar(200),
	fk_id_contribuyente numeric foreign key references contribuyente(id_contribuyente)
)
