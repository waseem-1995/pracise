import React ,{createContext,useContext,useState} from "react";
import {useNavigate} from "react-router-dom";



export  const AuthContext=createContext();

export const AuthProvider=({children})=>{

const Navigate=useNavigate();
    const [isAuth ,setIsAuth]=useState(false)
  

    const login=()=>{
        setIsAuth(true);
        Navigate("/feeds");
    }

    const logout=()=>{
        setIsAuth(false);
        Navigate("/");
    }

    return <AuthContext.Provider value={{isAuth,login,logout}}>{children}</AuthContext.Provider>
}


//  value can also be written as var params={

//     isAuth:isAuth,
//     Login:Login,
//     Logout:Logout,

//  }
// then value={params}


// when key ans value pair are same then we can also write as--->  value={{isAuth,Login,Logout}}