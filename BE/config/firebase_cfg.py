import firebase_admin
from firebase_admin import credentials, storage

def init_firebase():
    if not firebase_admin._apps:  
        cred = credentials.Certificate("./cred.json")
        firebase_admin.initialize_app(cred, {
            'storageBucket': 'paper-trans-3e6b8.appspot.com'
        })