#@title Setting up the Auth
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_community.document_loaders import PyPDFDirectoryLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Qdrant
import google.generativeai as genai
import sys
import io
from models import api_model

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def read_local():
    path_pdf = "D:/workspace/translator-app-gpt-4o-streamlit-main/datasource/file_pdf"
    pdf_loader = PyPDFDirectoryLoader(path_pdf, extract_images= False)

    docs = pdf_loader.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size = 1000, chunk_overlap = 300)

    docs = text_splitter.split_documents(docs)

    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    db = FAISS.from_documents(
        documents = docs,
        embedding=embeddings # passing in the embedder model
    )
    db.save_local('BE/embedding')