from typing import List

from fastapi import HTTPException

from DTOs.databaseModel.caucionModel import Caucion
from DTOs.genericResponse import GenericResponse
from services.dbConnection import DBConnection


class CaucionService:
    def __init__(self):
        self.db = DBConnection()
        self.session = self.db.get_session()

    def get_all(self) -> List[Caucion]:
        return self.session.query(Caucion)

    def get_by_id(self, id) -> Caucion:
        return self.session.query(Caucion).where(Caucion.caucion_id == int(id)).first()

    def save(self, caucion: Caucion) -> Caucion:
        self.session.add(caucion)
        self.session.commit()
        self.session.refresh(caucion)
        return caucion

    def update(self, caucion: Caucion) -> Caucion:
        caucionEncontrada = self.session.get(Caucion, caucion.caucion_id)

        if not caucionEncontrada:
            raise HTTPException(
                status_code=404, detail={"result": False, "message":"La Caución que intentás actualizar no existe"}
            )

        caucion_data = caucion.model_dump(exclude_unset=True)
        caucionEncontrada.sqlmodel_update(caucion_data)

        return self.save(caucionEncontrada)

    def delete(self, caucion_id: int) -> GenericResponse:
        caucionEncontrada = self.session.get(Caucion, caucion_id)

        if not caucionEncontrada:
            raise HTTPException(
                status_code=404, detail={"result": False, "message": "La Caución que intentás eliminar no existe"}
            )

        self.session.delete(caucionEncontrada)
        self.session.commit()
        return GenericResponse(True, caucion_id)
