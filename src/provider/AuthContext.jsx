import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const Context=createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };
    
    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout=()=>{
       return signOut(auth)
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
             
            setUser(currentUser)
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authvalue = { user, createUser, signInUser, logout };
    
    return (
        
        <Context.Provider value={authvalue}>
            {children}
        </Context.Provider>
    );
};

export default AuthContext;

AuthContext.propTypes = {
  children: PropTypes.node,
};