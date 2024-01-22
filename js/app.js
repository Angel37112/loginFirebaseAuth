import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

const loginForm = document.querySelector("#formLogin");

loginForm.addEventListener("submit", async(e) => {
    e.preventDefault();

    const email = loginForm["email"].value;
    const password = loginForm["password"].value;

    try{
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        console.log("Bienvenido " + userCredentials.user.email);
    }
    catch(error){
        if(error.code === 'auth/invalid-login-credentials'){
            console.log('Datos incorrectos');
        }
    }
})

/*    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    console.log(`Correo: ${email}, Contraseña: ${password}`);
    
    auth().signInWithEmailAndPassword(email, password)
    .then((success) => {
            console.log('Credenciales correctas');
        })
        .catch((error) => {
            console.log(error);
        })*/
 //   }