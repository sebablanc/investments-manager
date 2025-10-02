from typing import Annotated
from fastapi import Depends, FastAPI
from sqlmodel import Session
from routers import caucionRouter, fciRouter
from services.dbConnection import DBConnection
from contextlib import asynccontextmanager
from fastapi.middleware.cors import CORSMiddleware

VERSION = "1.0.0"
DESCRIPTION = """
Manager Investments API te ayuda a manejar tus propias carteras de inversiones. 🚀
"""

app = FastAPI(title="Manager Investments", description=DESCRIPTION, version=VERSION)

origins = ["http://localhost:4200"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db = DBConnection()
SessionDep = Annotated[Session, Depends(db.get_session)]


@asynccontextmanager
async def lifespan(app: FastAPI):
    DBConnection.create_db_and_tables()


app.include_router(caucionRouter.router)
app.include_router(fciRouter.router)
