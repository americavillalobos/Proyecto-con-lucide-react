// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo31OQ4yytPLTJH5u3jFKxu8oKkZKrIz0",
  authDomain: "sistema-v-3233c.firebaseapp.com",
  projectId: "sistema-v-3233c",
  storageBucket: "sistema-v-3233c.firebasestorage.app",
  messagingSenderId: "301157133774",
  appId: "1:301157133774:web:db4bcba1bd1ad488608f9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔥 Inicializar Firestore
export const db = getFirestore(app);
