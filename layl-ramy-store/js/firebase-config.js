import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDH4h6Rru09navbXpvxIPW3ssbCeIpi1vg",
  authDomain: "layl-ramy.firebaseapp.com",
  projectId: "layl-ramy",
  storageBucket: "layl-ramy.firebasestorage.app",
  messagingSenderId: "941311565102",
  appId: "1:941311565102:web:ca188dcf2e8acd46d2eebf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Expose to global scope for store.js to use
window.FirebaseAuth = { auth, provider, signInWithPopup, onAuthStateChanged, signOut };
