// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDZsqwEHEDDRGXbl06SVRTRNPkFAdJvk60",
  authDomain: "real-plots.firebaseapp.com",
  projectId: "real-plots",
  storageBucket: "real-plots.appspot.com",
  messagingSenderId: "225423885166",
  appId: "1:225423885166:web:c87d5557b36992104af77f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);