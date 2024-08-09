// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbB2hj1xsKZYv60IEmuKFvFfvr8u5l7qU",
  authDomain: "adddocs-ca8ef.firebaseapp.com",
  projectId: "adddocs-ca8ef",
  storageBucket: "adddocs-ca8ef.appspot.com",
  messagingSenderId: "144176698271",
  appId: "1:144176698271:web:f8a93b11ae90e0238d63aa",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
