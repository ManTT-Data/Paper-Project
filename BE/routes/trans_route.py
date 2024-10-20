from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from models.rag_chain import trans_chain

trans_router = APIRouter()

# Add CORS middleware
trans_router.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Add your frontend URL here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TranslationRequest(BaseModel):
    text: str
    output_language: str

@trans_router.post("/translate")
async def translate_text(request: TranslationRequest):
    translated_text = trans_chain.chat(request.output_language, request.text)
    return {"translated_text": translated_text}
