from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from models import api_model

def chain():
    #Tạo prompt cho LangChains
    prompt = PromptTemplate(
        template = """<|im_start|>system\nYou are a chatbot that takes care of and helps customers find information. If the customer wants to ask for information, use the following information to answer the question (If you don't know the answer, say you don't know, don't try to make up the answer). If not, respond to customers like a regular chatbot.\n
        {context}<|im_end|>\n<|im_start|>user\n{question}<|im_end|>\n<|im_start|>assistant""",
        input_variables = ["context", "question"],
    )

    #Embedding bằng FAISS
    db = FAISS.load_local('datasource/db_faiss', api_model.embeddings, allow_dangerous_deserialization=True)

    llm_chain = RetrievalQA.from_chain_type(
        llm = api_model.model,
        chain_type= "stuff",
        retriever = db.as_retriever(search_kwargs = {"k":10}, max_tokens_limit=1024),
        return_source_documents = False,
        chain_type_kwargs= {'prompt': prompt}
    )
    return llm_chain

def chat(request):
    llm_chain = chain()
    response = llm_chain.invoke(request)
    return str(response['result'])






