import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import AuthProvider, { AuthContext } from '../../Providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const GoogleLogIn = () => {




    const {googleLogIn} = useContext(AuthContext)


    const location = useLocation()
    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/';



    const handleGoogleLogin = () => {


        googleLogIn()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;



            fetch (`http://localhost:3000/users`, {

            method : 'POST',

            headers : {'Content-Type': 'application/json'},

            body : JSON.stringify(user)

            })
            .then (res => res.json())
            .then (data => console.log(data))


            navigate  (from, {replace : true})
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }
    return (
        <div>
            <div onClick={handleGoogleLogin} className='flex items-center mx-auto border p-2 rounded-lg cursor-pointer'>
        <FaGoogle className='mr-5'></FaGoogle>
        Contnue With Google

        
        </div>
        </div>
    );
};

export default GoogleLogIn;