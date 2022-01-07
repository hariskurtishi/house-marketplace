import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUjGHVwTkd_A-NndHKspWWVeVOwfO1SUI",
  authDomain: "house-marketplace-app-9d6a4.firebaseapp.com",
  projectId: "house-marketplace-app-9d6a4",
  storageBucket: "house-marketplace-app-9d6a4.appspot.com",
  messagingSenderId: "450833997766",
  appId: "1:450833997766:web:f321c53037bd9e55e11cc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore() 