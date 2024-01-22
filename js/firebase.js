import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBFMg3WVQHcHsnj00iySEoZMFiySd09DJ0",
    authDomain: "web40-eff41.firebaseapp.com",
    projectId: "web40-eff41",
    storageBucket: "web40-eff41.appspot.com",
    messagingSenderId: "910451177367",
    appId: "1:910451177367:web:2e26f5c80cbef0672176d2",
    measurementId: "G-C1PX9K0LES"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);