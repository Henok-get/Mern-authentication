// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ec284.firebaseapp.com",
  projectId: "mern-auth-ec284",
  storageBucket: "mern-auth-ec284.appspot.com",
  messagingSenderId: "490384845338",
  appId: "1:490384845338:web:165ff2a97d33e24e7cffa3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);