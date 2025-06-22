// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs3W6Mfqf0jFEV7XOR4RYojrldtmYdeeg",
  authDomain: "alta-pinta-335ea.firebaseapp.com",
  projectId: "alta-pinta-335ea",
  storageBucket: "alta-pinta-335ea.firebasestorage.app",
  messagingSenderId: "25604601240",
  appId: "1:25604601240:web:15009624ca4663065c27ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)