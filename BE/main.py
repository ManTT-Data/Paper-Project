from fastapi import FastAPI
from routes.upload_route import upload_pdf, upload_docs, delete_file
from config.firebase_cfg import init_firebase

app = FastAPI()

# Initialize Firebase
init_firebase()

# Include the upload routes
app.include_router(upload_pdf)
app.include_router(upload_docs)
app.include_router(delete_file)
