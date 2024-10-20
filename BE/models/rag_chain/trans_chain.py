from langchain_community.vectorstores import FAISS
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate
from models import api_model

def chain():
    #Tạo prompt cho LangChains
    prompt = PromptTemplate(
        template = """<|im_start|>system\nYou are a chatbot that translate the customer's input. Use the following context for the most accurate translation. Context: \n
        {context}<|im_end|>\n<|im_start|>user\n{question}<|im_end|>\n<|im_start|>assistant""",
        input_variables = ["context", "question"],
    )

    #Embedding bằng FAISS
    db = FAISS.load_local('BE/embedding/db_faiss', api_model.embeddings, allow_dangerous_deserialization=True)

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






