import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9-Lbya8UobANPklsesX6b4gBwRn55OmA",
  authDomain: "new-project-d3ee8.firebaseapp.com",
  projectId: "new-project-d3ee8",
  storageBucket: "new-project-d3ee8.appspot.com", // <- corrected domain (.app → .appspot.com)
  messagingSenderId: "345170475971",
  appId: "1:345170475971:web:7582e87ef84a011e919b76",
  measurementId: "G-SMEXSTJ6L3",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Provider setup
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// ✅ FIX: Pass provider to signInWithPopup
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
