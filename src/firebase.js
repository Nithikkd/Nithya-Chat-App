// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGe7g0VSTCOegRhIUGTTiMgpb6X509Rjo",
  authDomain: "chatapp-53995.firebaseapp.com",
  projectId: "chatapp-53995",
  storageBucket: "chatapp-53995.appspot.com",
  messagingSenderId: "206060602933",
  appId: "1:206060602933:web:81add2df2aaf05e10c537c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
