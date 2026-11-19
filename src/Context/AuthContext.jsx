import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  // sign up new user using email and password
  const signupWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // login Existing email & password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Google SignUp
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // logout function
  const logout = ()=>{
    return signOut(auth);
  }

  // monitor or manage use State
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
    setUser(CurrentUser);
    setLoading(false);
  });
  return () => unsubscribe();
}, [auth]);



  const value = {
    user,
    signupWithEmail,
    signInWithEmail,
    googleLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {/* {children} */}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
