import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext';

const Navbar = () => {
 const {logout,isAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    console.log(isAuth)

    const handleLoginClick=()=>{

        if(isAuth){
            logout();
            navigate("")
        }else{
            navigate("/login")
        }

        


    }
  return (
    <div >Navbar

        <Link to="">Home</Link>
        <Link to="/feed"> Feed</Link>
        <Link to="/posts"> Posts</Link>
        <button onClick={handleLoginClick}>{isAuth ? "Logout" :"Login"}</button>
    </div>
  )
}

export default Navbar