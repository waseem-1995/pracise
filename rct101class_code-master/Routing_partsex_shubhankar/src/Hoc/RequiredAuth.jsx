import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const RequiredAuth = ({children}) => {
    const {isAuth} =useContext(AuthContext);

    const {pathname}=useLocation();
    if(isAuth){
        return children;
    }else{
        //redirectional code
        
     return <Navigate to="/login" state={{from:pathname}} replace></Navigate>
    }
}

export default RequiredAuth