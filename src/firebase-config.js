// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaqMBqH26hoSJ6X1LihaExlaUwxWi1nxc",
  authDomain: "plots-f0478.firebaseapp.com",
  projectId: "plots-f0478",
  storageBucket: "plots-f0478.appspot.com",
  messagingSenderId: "157517640561",
  appId: "1:157517640561:web:414d70345592472e323cd0",
  measurementId: "G-TLX334Y4R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);