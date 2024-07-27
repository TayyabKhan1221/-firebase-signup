// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHTIdX6fiTrbGY827mUksrJBaSblpYMCg",
  authDomain: "signup-login-2023d.firebaseapp.com",
  projectId: "signup-login-2023d",
  storageBucket: "signup-login-2023d.appspot.com",
  messagingSenderId: "836315492063",
  appId: "1:836315492063:web:1854efc840fc7b69a0436a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);

  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };