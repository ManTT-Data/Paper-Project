import os
import google.generativeai as genai
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_google_genai import GoogleGenerativeAIEmbeddings


#lấy API gemini
os.environ["GOOGLE_API_KEY"] = ''
genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

#lấy model chatbot
model = ChatGoogleGenerativeAI(model="gemini-pro",
                             temperature=0.4)

#lấy model embedding
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")