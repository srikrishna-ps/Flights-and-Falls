// src/hooks/useAuth.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase'; // Assuming you're using Firebase

// Create context for authentication
const AuthContext = createContext();

// AuthProvider to wrap around app and provide auth state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth state
export const useAuth = () => {
  return useContext(AuthContext);
};
