import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const { user, loader } = useContext(AuthContext)


    if (loader) {


        return <h1>Loading</h1>
     }

  
    

    if (user) {

        return children;
    }









    return <Navigate state={{ from: location }} to='/login' replace></Navigate>







};

export default PrivateRoutes;