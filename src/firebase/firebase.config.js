// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAl_-1WvRTL3vRMLerg3MC_-vJ9XaQ6gbI",
  authDomain: "glow-aura.firebaseapp.com",
  projectId: "glow-aura",
  storageBucket: "glow-aura.appspot.com",
  messagingSenderId: "345637160637",
  appId: "1:345637160637:web:57e00685504d0ab99ed9d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app