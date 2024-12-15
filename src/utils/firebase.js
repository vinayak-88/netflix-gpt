// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj1x5O95j8nD0e_Qs6sXgb0GXJxEQ_MM0",
  authDomain: "netflixgpt-52f96.firebaseapp.com",
  projectId: "netflixgpt-52f96",
  storageBucket: "netflixgpt-52f96.firebasestorage.app",
  messagingSenderId: "7406172107",
  appId: "1:7406172107:web:bf0d6183c7f7b8dceda84e",
  measurementId: "G-CWFGD2TWK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
