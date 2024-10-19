from fastapi import FastAPI
from routes.upload_route import upload_router 
from config.firebase_cfg import init_firebase

app = FastAPI()

app.include_router(upload_router)