import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext =createContext();

export const AuthProvider=({children})=>{
    const [isAuth,setIsauth]=useState(false);
    const navigate=useNavigate();
    const {state}=useLocation();

    console.log(state)

    const login=()=>{
         setIsauth(true);
        if(state.from){
           
        navigate(state.from,{replace:true})
        }else{
            navigate("/");
        }
        
    };

    const logout=()=>{
        setIsauth(false);
    }


    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}