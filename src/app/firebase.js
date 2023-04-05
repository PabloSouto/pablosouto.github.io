import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  // Paste your firebase config here
// Configuración de Firebase
      const firebaseConfig = {
        apiKey: "AIzaSyCXW9uAzVGdEMKEOwuMgLY4juaP5z8tyXo",
        authDomain: "videos-mates.firebaseapp.com",
        projectId: "videos-mates",
        storageBucket: "videos-mates.appspot.com",
        messagingSenderId: "1010827084323",
        appId: "1:1010827084323:web:0c8450649aa45f8e178b28",
        measurementId: "G-84F8R5R5L5"
    };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)