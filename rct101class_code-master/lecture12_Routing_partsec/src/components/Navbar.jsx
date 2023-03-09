import React from 'react';
import {Link, useNavigate,} from "react-router-dom";
import { AuthContext } from '../Context/AuthContext';
import "./Navbar.css";
import {useContext} from "react";

const Navbar = () => {
    const Navigate=useNavigate();
    const {isAuth,logout}=useContext(AuthContext)
    const handleClick=()=>{
      
        if(isAuth){
          logout();
          Navigate("/")
        }
        else{ 
      Navigate("/login")
        }
    }
  return (
    <div className='Navbar'>Navbar:
    <Link to="/">Home</Link>
    <Link to="/Feed">Feed</Link>
    <button onClick={handleClick}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  )
}

export default Navbar