import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovide/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();

    if(!user){
        return <Navigate to ="/login" state={{from:location}} replace/>
    }
    return children;
  
};

export default PrivateRoute;