import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);

export const AuthContext = createContext(null)

const provider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {


    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true)


    const registerUser = (emai, password) => {

        setLoader (true)


        return createUserWithEmailAndPassword(auth, emai, password)
    }


    const logIn = (emai, password) => { 
        setLoader (true)


        return signInWithEmailAndPassword (auth, emai, password)
    }
    const logOut = () => {
        setLoader (true)

        return signOut(auth)
      }


      const googleLogIn = () => {

        return signInWithPopup (auth, provider)
      }


      




    useEffect(() => {



        const unsubscribe = onAuthStateChanged (auth, currentUser => { 

            setUser (currentUser)




            if (currentUser) {

                axios.post (`http://localhost:3000/jwt`, {

                email : currentUser.email

                
                })
                .then (data => {


                    console.log(data.data.result);


                    localStorage.setItem ('access_token', data.data.result)
                })
            }


            else {


                localStorage.removeItem ('access_token')
            }

            setLoader(false)

        



        })

        return () => {
            return unsubscribe()
        }

        
    }, [])



    



    const authInfo = {

        user,
        registerUser,
        logOut,
        googleLogIn,
        logIn,
        
        loader
     }
    return (
        <AuthContext.Provider value= {authInfo}>

            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;