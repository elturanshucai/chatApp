import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: "chat-c34ab.firebaseapp.com",
    projectId: "chat-c34ab",
    storageBucket: "chat-c34ab.appspot.com",
    messagingSenderId: "812825579696",
    appId: "1:812825579696:web:adc2a99a231f3935a1eb75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();