import { auth, createUserWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector('#form2');
const messageDiv = document.querySelector("#message");
form.addEventListener  ('submit', async (event) => {  
    messageDiv.innerText = "Signup successfully!";
    window.location.href = "./dashboard.html"
try {
    event.preventDefault();
    const email = event.target.children[0].value;
    const password = event.target.children[1].value;
  await createUserWithEmailAndPassword(auth, email, password)
} catch (error) {
    console.log("my error msg" , error.message);
    messageDiv.innerText = error.message;
}
   
})