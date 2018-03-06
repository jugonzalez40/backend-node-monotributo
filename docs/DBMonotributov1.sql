create database mono
go
use mono
go 

--alter table contribuyente add contrasena varchar(200)
create table contribuyente (
	id_contribuyente numeric primary key identity,
	nombre_contribuyente varchar(150),
	apellido_contribuyente varchar(150),
	correo_contribuyente varchar(200),
	contrasena varchar(200)
)

go 

create table peluqueria(
	id_peluqueria numeric primary key identity,
	nombre_peluqieria varchar(200),
	direccion varchar(200),
	metros_cuadrados tinyint,
	fk_id_contribuyente numeric foreign key references contribuyente(id_contribuyente)
)

go 
--solo un registro por año 
create table ano_gravable(
	id_ano_gravable numeric primary key identity,
	ano char(4) unique,
	metros_cuadrados float default 50
)

go
--
create table categoria (
	id_categoria numeric primary key identity,
	nombre_categoria varchar(150),
	minimo numeric(20,2),
	maximo numeric(20,2),
	valor_tributo numeric(20,2),
	fk_id_ano_gravable numeric foreign key references ano_gravable(id_ano_gravable)
)

go
--Un registro por año 
create table detalle_peluqueria(
	id_detalle_peluqueria numeric primary key identity,
	ingresos_brutos numeric(20,2),
	pago_mensual numeric(20),
	fk_id_categoria numeric foreign key references categoria(id_categoria),
	fk_id_peluqueria numeric foreign key references peluqueria(id_peluqueria)
)

go 
-- pago mensual = categoria.valor_tributo/12
--se generan doce registros 
--las alertas se generarán desde aqí 
create table pago_mensual(
	id_pago_mensual numeric primary key identity,
	mes char(2) not null, 
	fecha_pago datetime	,
	fecha_limite datetime,
	fk_id_detalle_peluqueria numeric foreign key references detalle_peluqueria(id_detalle_peluqueria) 
)


