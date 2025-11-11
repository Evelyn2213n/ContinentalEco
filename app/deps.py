from .database import SessionLocal

# Dependencia para obtener sesión de BD en cada solicitud
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
