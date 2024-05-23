// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bfa84.firebaseapp.com",
  projectId: "mern-blog-bfa84",
  storageBucket: "mern-blog-bfa84.appspot.com",
  messagingSenderId: "969290570660",
  appId: "1:969290570660:web:6247964245c1914e4cff31",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
