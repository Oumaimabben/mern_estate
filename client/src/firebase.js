// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-296d0.firebaseapp.com",
  projectId: "mern-estate-296d0",
  storageBucket: "mern-estate-296d0.appspot.com",
  messagingSenderId: "535249638667",
  appId: "1:535249638667:web:df4d8173ba1a83c0e97e0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);