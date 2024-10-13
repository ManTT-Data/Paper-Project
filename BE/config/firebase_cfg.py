import firebase_admin
from firebase_admin import credentials, storage

def init_firebase():
    cred = credentials.Certificate("../cred.json") 
    firebase_admin.initialize_app(cred, {
        'storageBucket': 'paper-trans-3e6b8.appspot.com'
    })
l