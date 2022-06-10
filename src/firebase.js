import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1BmHkv3burty6b7Vti29-ql55KYTyM7A",
  authDomain: "carqueue-4879f.firebaseapp.com",
  projectId: "carqueue-4879f",
  storageBucket: "carqueue-4879f.appspot.com",
  messagingSenderId: "739168358812",
  appId: "1:739168358812:web:e4462fdc1619c9081bf859"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app);
export const storage = getStorage(app);