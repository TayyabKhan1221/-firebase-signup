import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#signup-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();

    const email = event.target.querySelector('input[type="email"]').value;
    const password = event.target.querySelector('input[type="password"]').value;

    // firebase se signup karne ka function
    const result = await createUserWithEmailAndPassword(auth, email, password);
    message.innerText = "Sign Up Successfully";
    console.log(result);

    event.target.reset();
  } catch (error) {
    message.innerText = error.message;
    console.log("my error msg", error.message);
  }
});
