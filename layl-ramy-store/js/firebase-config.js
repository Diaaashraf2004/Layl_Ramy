// Firebase Compat Configuration
// Using compat libraries allows us to bypass ES Module CORS restrictions on file:///
const firebaseConfig = {
  apiKey: "AIzaSyDH4h6Rru09navbXpvxIPW3ssbCeIpi1vg",
  authDomain: "layl-ramy.firebaseapp.com",
  projectId: "layl-ramy",
  storageBucket: "layl-ramy.firebasestorage.app",
  messagingSenderId: "941311565102",
  appId: "1:941311565102:web:ca188dcf2e8acd46d2eebf"
};

// Initialize Firebase Compat
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebase.firestore();

// Create wrapper to perfectly mimic the Modular API that store.js expects
window.FirebaseAuth = { 
  auth: auth, 
  provider: provider, 
  signInWithPopup: (authInstance, prov) => authInstance.signInWithPopup(prov), 
  onAuthStateChanged: (authInstance, callback) => authInstance.onAuthStateChanged(callback), 
  signOut: (authInstance) => authInstance.signOut()
};

window.FirebaseDB = { 
  db: db, 
  collection: (dbInstance, path) => dbInstance.collection(path), 
  doc: (dbInstanceOrCollection, pathOrId, optionalId) => {
    // If it's a Firestore instance (db, "store_data", "key")
    if (optionalId) {
      return dbInstanceOrCollection.collection(pathOrId).doc(optionalId);
    }
    // If it's a collection ref (collection, "key")
    if (dbInstanceOrCollection.doc) {
      return dbInstanceOrCollection.doc(pathOrId);
    }
    // If it's just (db, "store_data")
    return dbInstanceOrCollection.doc(pathOrId);
  }, 
  getDocs: (query) => query.get(), 
  getDoc: (docRef) => docRef.get(), 
  setDoc: (docRef, data, options) => docRef.set(data, options), 
  updateDoc: (docRef, data) => docRef.update(data), 
  deleteDoc: (docRef) => docRef.delete(), 
  onSnapshot: (ref, callback) => ref.onSnapshot(callback)
};

// Notify the app that Firebase is ready
window.dispatchEvent(new Event('firebase-ready'));
