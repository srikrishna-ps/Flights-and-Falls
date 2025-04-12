// Firebase auth functions

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./config"; // if config.js exports app

const auth = getAuth(app);

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export { auth };
