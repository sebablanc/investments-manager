from typing import List
from fastapi import APIRouter, HTTPException, status

from DTOs.databaseModel.fciModel import Fci
from services.fciservice import FciService

router = APIRouter(
    prefix="/fci",
    tags=["Fondos Comunes de Inversión"],
    responses={404: {"description": "Servicio no encontrado"}},
)

@router.get("/", response_model=List[Fci], status_code=status.HTTP_200_OK)
def root():
    return FciService().get_all()

@router.get("/{id}", response_model=Fci)
def single_fci(id):
    element =  FciService().get_by_id(id)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": "EL FCI solicitado no fue encontrado"})
    return element

@router.post("/", response_model=Fci)
def save_fci(fci: Fci):
    element =  FciService().save(fci)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'El FCI no fue guardado'})
    return element

@router.put("/{id}", response_model=Fci)
def update_fci(id:int, fci: Fci):
    element =  FciService().update(fci)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'El FCI no fue actualizado'})
    return element

@router.delete("/{id}", response_model=None)
def delete_fci(id:int):
    element =  FciService().delete(id)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'El FCI no fue eliminado'})
    return element
