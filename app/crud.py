from sqlalchemy.orm import Session
from . import models, schemas

def get_residuos(db: Session):
    return db.query(models.Residuo).all()

def get_residuo(db: Session, residuo_id: int):
    return db.query(models.Residuo).filter(models.Residuo.id == residuo_id).first()

def create_residuo(db: Session, residuo: schemas.ResiduoCreate):
    db_item = models.Residuo(
        tipo=residuo.tipo,
        peso=residuo.peso,
        ubicacion=residuo.ubicacion
    )
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
