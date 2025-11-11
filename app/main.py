from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models
from .routers import residuos

# Crear tablas automáticamente (solo en desarrollo)
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Eco-Continental API")

# Permitir solicitudes desde el frontend (Angular)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir rutas
app.include_router(residuos.router)

@app.get("/")
def root():
    return {"message": "🌱 API Eco-Continental funcionando correctamente"}
