import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGUE7vKvCa3DXE8PU2cZmzfCM3IDqVHHY",
  authDomain: "social-media-app-41ec3.firebaseapp.com",
  projectId: "social-media-app-41ec3",
  storageBucket: "social-media-app-41ec3.appspot.com",
  messagingSenderId: "784940158715",
  appId: "1:784940158715:web:7b8eb1862695cd58816a5e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
