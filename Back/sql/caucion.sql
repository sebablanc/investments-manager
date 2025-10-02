USE investments;

DROP TABLE caucion;

CREATE TABLE caucion(
	caucion_id int auto_increment primary key,
    comision decimal(6,3) not null,
    derecho_mercado decimal(6,3) not null,
    dias int not null,
    fecha date,
    monto float not null,
    tna decimal(6,3) not null,
    CONSTRAINT chk_comision CHECK (comision >= 0.00 AND comision <= 100.00),
    CONSTRAINT chk_tna CHECK (tna >= 0.00 AND tna <= 100.00)
);