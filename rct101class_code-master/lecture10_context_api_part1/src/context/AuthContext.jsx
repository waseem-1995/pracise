import React from "react";
import { createContext } from "react";

export const AuthContextProvider=({children})=>{

    const [isAuthrized,setIsAuthzed]=useState(false);
    const login=(username,password)=>{
         
    }

    




    return <AuthContextProvider.Provider>children</AuthContextProvider.Provider>
}