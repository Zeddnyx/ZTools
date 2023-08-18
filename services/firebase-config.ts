// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIRE_APIKEY,
  authDomain: process.env.FIRE_AUTH,
  projectId: process.env.FIRE_PROJECT,
  storageBucket: process.env.FIRE_STORAGE,
  messagingSenderId: process.env.FIRE_MSG,
  appId: process.env.FIRE_APP,
};

const googleProvider = new GoogleAuthProvider();
const emailProvider = new EmailAuthProvider();
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const db = getFirestore(app);

export {  db, googleProvider, emailProvider };
