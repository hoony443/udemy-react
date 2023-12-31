// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACB8JG1KwBMRxFNl9Z9GQ5GcU1eVqA3DE",
  authDomain: "udemy-4f611.firebaseapp.com",
  projectId: "udemy-4f611",
  storageBucket: "udemy-4f611.appspot.com",
  messagingSenderId: "304990191207",
  appId: "1:304990191207:web:e56206447ee358c7935ec2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
};
export default auth;
