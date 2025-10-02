USE investments;

DROP TABLE IF EXISTS fci;

CREATE TABLE fci(
	fci_id int auto_increment primary key,
    nombre varchar(60),
    clase ENUM("A","B","C") not null,
    valor_cuotaparte decimal not null,
    porc_dia float not null,
    porc_mes float not null,
    porc_anno float not null,
    porc_anual float not null,
    porc_honorarios float,
    tipo_inversion ENUM("RENTA_FIJA", "RENTA_VARIABLE", "RENTA_MIXTA") not null,
    benchmark varchar(50),
    moneda ENUM("PESOS", "DOLAR", "EURO"),
    horizonte ENUM("LARGO_PLAZO", "MEDIANO_PLAZO", "CORTO_PLAZO") not null,
    inversion_minima float,
    plazo_liquidacion ENUM("HS_24", "HS_48", "HS_72"),
    gerente varchar(100),
    CONSTRAINT chk_porc_dia CHECK (porc_dia >= 0.00 AND porc_dia <= 100.00),
    CONSTRAINT chk_porc_mes CHECK (porc_mes >= 0.00 AND porc_mes <= 100.00),
    CONSTRAINT chk_porc_anno CHECK (porc_anno >= 0.00 AND porc_anno <= 100.00),
    CONSTRAINT chk_porc_anual CHECK (porc_anual >= 0.00 AND porc_anual <= 100.00),
    CONSTRAINT chk_porc_honorarios CHECK (porc_honorarios >= 0.00 AND porc_honorarios <= 100.00)
);