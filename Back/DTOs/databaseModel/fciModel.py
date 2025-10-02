import datetime
from sqlalchemy.ext.declarative import declarative_base
from sqlmodel import Field, SQLModel

base = declarative_base()
class Fci(SQLModel, table=True):
    __tablename__ = "fci"
    fci_id: int | None = Field(default=None,primary_key=True)
    nombre: str = Field()
    clase: str = Field()
    valor_cuotaparte: float = Field()
    porc_dia: float = Field()
    porc_mes: float = Field()
    porc_anno: float = Field()
    porc_anual: float = Field()
    porc_honorarios: float = Field()
    tipo_inversion: str = Field()
    benchmark: str = Field()
    moneda: str = Field()
    horizonte: str = Field()
    inversion_minima: float = Field()
    plazo_liquidacion: str = Field()
    gerente: str = Field()