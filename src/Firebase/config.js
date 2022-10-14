// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEUa_D09MeGPfUyHiWSgxQoKTMHuNtA14",
  authDomain: "user-s-info-f33d1.firebaseapp.com",
  projectId: "user-s-info-f33d1",
  storageBucket: "user-s-info-f33d1.appspot.com",
  messagingSenderId: "626358135179",
  appId: "1:626358135179:web:5fbdbb8682ca34f5c0e78e"
};

// Initialize Cloud Firestore and get a reference to the service

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
