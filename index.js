// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYtnOAd6ZgqZFwGxC0tFqQJi8dSZZirRY",
  authDomain: "space-12.firebaseapp.com",
  projectId: "space-12",
  storageBucket: "space-12.appspot.com",
  messagingSenderId: "864809892011",
  appId: "1:864809892011:web:0ac2fc31b49f2453975fee",
  measurementId: "G-XLH6CH4G0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const functions = getFunctions(app);
connectFunctionsEmulator(functions, "localhost", 8080);