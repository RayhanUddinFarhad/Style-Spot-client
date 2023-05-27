import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null)



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState('')


    const registerUser = (emai, password) => {


        return createUserWithEmailAndPassword(auth, emai, password)
    }


    const logIn = (emai, password) => { 


        return signInWithEmailAndPassword (auth, emai, password)
    }
    const logOut = () => {

        return signOut(auth)
      }

      




    useEffect(() => {



        const unsubscribe = onAuthStateChanged (auth, currentUser => { 

            setUser (currentUser)

        



        })

        return () => {
            return unsubscribe()
        }

        
    }, [])



    



    const authInfo = {

        user,
        registerUser,
        logOut,
        logIn
     }
    return (
        <AuthContext.Provider value= {authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;