import datetime
from pydantic import field_validator
from sqlalchemy.ext.declarative import declarative_base
from sqlmodel import Field, SQLModel

base = declarative_base()
class Caucion(SQLModel, table=True):
    __tablename__ = "caucion"
    caucion_id: int | None = Field(default=None,primary_key=True)
    fecha: datetime.date = Field(default=datetime.datetime.now())
    monto: float = Field()
    tna: float = Field()
    comision: float = Field()
    dias: int = Field(ge=1)
    derecho_mercado: float = Field()

    @field_validator('fecha')
    def validar_fecha(cls, v):
        if not v.isDate():
            raise ValueError('El número de cuenta solo puede contener dígitos')
        return v