import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);

        console.log("Bienvenido " + userCredentials.user.email);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = "../entrada.html";
    } catch (error) {
        if (error.code === 'auth/invalid-login-credentials') {
            console.log('Datos incorrectos');
        } else {
            console.error('Error al iniciar sesión:', error);
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        window.location.href = 'entrada.html';
    }
});