import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { auth } from "../firebase";
// import auth from "../firebase/compat/auth";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  function signout() {
    return auth.signOut();
  }

  function forgotpassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    signout,
    forgotpassword,
  };
  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};

export default AuthProvider;
