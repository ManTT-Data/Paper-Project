from fastapi import FastAPI, File, UploadFile, HTTPException
from firebase_admin import credentials, storage
from uuid import uuid4

cred = credentials.Certificate("./cred.json")
firebase_admin.initialize_app(cred, {
    'storageBucket': 'paper-trans-3e6b8.appspot.com'
})

app = FastAPI()

@app.post("/upload_pdf")
async def upload_pdf(file: UploadFile = File(...)):
    if file.content_type != "application/pdf":
        raise HTTPException(status_code=400, detail="must be PDF file")
    
    file_name = f"{uuid4()}.pdf"

    bucket = storage.bucket()
    blob = bucket.blob(file_name)
    
    blob.upload_from_file(file.file, content_type="application/pdf")
    blob.make_public()  

    file_url = blob.public_url
    return {"file_url": file_url}

@app.post("/upload_docs")
async def upload_docs(file: UploadFile = File(...)):
    if file.content_type != "application/docs":
        raise HTTPException(status_code=400, detail="must be DOCS file")
    
    file_name = f"{uuid4()}.docs"

    bucket = storage.bucket()
    blob = bucket.blob(file_name)
    
    blob.upload_from_file(file.file, content_type="application/docs")
    blob.make_public()  

    file_url = blob.public_url
    return {"file_url": file_url}
