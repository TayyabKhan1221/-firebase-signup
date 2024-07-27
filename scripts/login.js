import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;
    // firebase se login karne ka function
    const result = await signInWithEmailAndPassword(auth, email, password);

    console.log(result);
  } catch (error) {
    console.log("my error msg", error.message);
  }
});
