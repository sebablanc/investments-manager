from typing import List
from fastapi import APIRouter, HTTPException, status

from DTOs.databaseModel.caucionModel import Caucion
from services.caucionservice import CaucionService

router = APIRouter(
    prefix="/caucion",
    tags=["Caucion"],
    responses={404: {"description": "Not found"}},
)

@router.get("/", response_model=List[Caucion], status_code=status.HTTP_200_OK)
def root():
    return CaucionService().get_all()


@router.get("/{id}", response_model=Caucion)
def single_caucion(id):
    element =  CaucionService().get_by_id(id)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'Caución no encontrada'})
    return element

@router.post("/", response_model=Caucion)
def save_caucion(caucion: Caucion):
    element =  CaucionService().save(caucion)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'Caución no guardada'})
    return element

@router.put("/{id}", response_model=Caucion)
def update_caucion(id:int, caucion: Caucion):
    element =  CaucionService().update(caucion)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'Caución no actualizada'})
    return element

@router.delete("/{id}", response_model=None)
def delete_caucion(id:int):
    element =  CaucionService().delete(id)
    if not element:
        raise HTTPException(status_code=404, detail={"result": False, "message": 'La caución no se pudo eliminar'})
    return element
