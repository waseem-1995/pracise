import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import {useContext} from "react";
import { AuthContext } from '../Context/AuthContext';


const Login = () => {
    const [loginCreds,setlogincreds]=useState({});
    const {login}=useContext(AuthContext);

    const onChange=()=>{
        const {name,value}=e.target;
        setlogincreds({
            ...loginCreds,
            [name]:value
        })
    }


  

    const handlesubmit=(e)=>{
   e.preventDefalut();
   login();
    }

  return (
    <div>Login
        
         <form className="login-form">
         <input  name="Email" type="text" placeholder='Enter Email..' onChange={onChange} />
        
        <input name="password"   type="password" placeholder="Enter Password"  onChange={onChange} />
        
        <button type="submit" handlesubmit={handlesubmit}>Login</button>
         </form>
       
    </div>
  )
}

export default Login