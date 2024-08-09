import { auth, signOut, onAuthStateChanged } from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");
const btn = document.querySelector("#logout-button");
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    userEmailDiv.innerText = user.email;
    const uid = user.uid;
  } else {
    window.location = "./login.html";
  }
});

btn.addEventListener("click", async () => {
  try {
    await signOut(auth);
    console.log("Sign-out successful");
  } catch (error) {
    console.log(error);
  }
});
