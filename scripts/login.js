import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");
const msg = document.querySelector("#message");

form.addEventListener("submit", async (event) => {
  msg.innerText = "loading....";
  try {
    event.preventDefault();

    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
    await signInWithEmailAndPassword(auth, email, password);
    msg.innerText = "login successful";
    window.location.href = "./dashboard.html";

    console.log(result);
  } catch (error) {
    msg.innerText = error.message ||" error ";
    console.log("my error msg", error.message);
  }
});
