from pydantic import BaseModel
from typing import Optional

class ResiduoBase(BaseModel):
    tipo: str
    peso: float
    ubicacion: Optional[str] = None

class ResiduoCreate(ResiduoBase):
    pass

class Residuo(ResiduoBase):
    id: int

    class Config:
        orm_mode = True
