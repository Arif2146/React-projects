import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9-Lbya8UobANPklsesX6b4gBwRn55OmA",
  authDomain: "new-project-d3ee8.firebaseapp.com",
  databaseURL: "https://new-project-d3ee8-default-rtdb.firebaseio.com",
  projectId: "new-project-d3ee8",
  storageBucket: "new-project-d3ee8.firebasestorage.app",
  messagingSenderId: "345170475971",
  appId: "1:345170475971:web:7582e87ef84a011e919b76",
  measurementId: "G-SMEXSTJ6L3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error.message);
    }
  }

  return userRef;
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
