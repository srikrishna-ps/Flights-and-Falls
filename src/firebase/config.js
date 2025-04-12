// Firebase config and initialization
// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWTKtJ5N5lnO-H918V-BLo2OUfeBO5aeU",
  authDomain: "flights-and-falls.firebaseapp.com",
  projectId: "flights-and-falls",
  storageBucket: "flights-and-falls.firebasestorage.app",
  messagingSenderId: "176867318042",
  appId: "1:176867318042:web:b8b41d1e3d760c2c6cf4a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };

