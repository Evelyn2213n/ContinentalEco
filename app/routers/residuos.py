from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import crud, schemas
from ..deps import get_db

router = APIRouter(
    prefix="/residuos",
    tags=["residuos"]
)

@router.get("/", response_model=list[schemas.Residuo])
def listar_residuos(db: Session = Depends(get_db)):
    return crud.get_residuos(db)

@router.post("/", response_model=schemas.Residuo)
def crear_residuo(residuo: schemas.ResiduoCreate, db: Session = Depends(get_db)):
    return crud.create_residuo(db, residuo)

@router.get("/{residuo_id}", response_model=schemas.Residuo)
def obtener_residuo(residuo_id: int, db: Session = Depends(get_db)):
    result = crud.get_residuo(db, residuo_id)
    if not result:
        raise HTTPException(status_code=404, detail="Residuo no encontrado")
    return result
