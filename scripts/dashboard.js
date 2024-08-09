import { auth, signOut, onAuthStateChanged } from "./firebase.js";

const userEmailDiv = document.querySelector("#user-email");

const btn = document.querySelector("#logout-button");
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    console.log(user);

    userEmailDiv.innerText = user.email;
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
