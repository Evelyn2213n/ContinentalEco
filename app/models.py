from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Residuo(Base):
    __tablename__ = "residuos"
    id = Column(Integer, primary_key=True, index=True)
    tipo = Column(String(100), nullable=False)
    peso = Column(Float, nullable=False)
    ubicacion = Column(String(255), nullable=True)
