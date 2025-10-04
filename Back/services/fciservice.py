from typing import List

from fastapi import HTTPException
from sqlmodel import select
from DTOs.databaseModel.fciModel import Fci
from DTOs.genericResponse import GenericResponse
from services.dbConnection import DBConnection


class FciService:
    def __init__(self):
        self.db = DBConnection()
        self.session = self.db.get_session()

    def get_all(self) -> List[Fci]:
        return self.db.get_all(Fci)
    
    def get_by_id(self, id) -> Fci:
        statement = select(Fci).where(Fci.fci_id == id)
        return self.session.exec(statement).first()

    def save(self, fci: Fci) -> Fci:
        self.session.add(fci)
        self.session.commit()
        self.session.refresh(fci)
        return fci

    def update(self, fci: Fci) -> Fci:
        fciEncontrada = self.session.get(Fci, fci.fci_id)

        if not fciEncontrada:
            raise HTTPException(
                status_code=404, detail={"result": False, "message": "El FCI que intentas actualizar no existe"}
            )

        fci_data = fci.model_dump(exclude_unset=True)
        fciEncontrada.sqlmodel_update(fci_data)

        return self.save(fciEncontrada)

    def delete(self, fci_id: int) -> GenericResponse:
        fciEncontrada = self.session.get(Fci, fci_id)

        if not fciEncontrada:
            raise HTTPException(
                status_code=404, detail={"result": False, "message":"El FCI que intentas eliminar no existe"}
            )

        self.session.delete(fciEncontrada)
        self.session.commit()
        return GenericResponse(True, fci_id)
