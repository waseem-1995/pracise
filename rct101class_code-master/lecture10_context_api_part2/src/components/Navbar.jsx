import React, { useContext } from 'react'
import Wishlist from './Wishlist'
import { AuthContext } from '../Context/AuthContext';
import { ThemeContext } from '../Context/ThemeContext';


const Navbar = () => {

  const {isAuthorized,login,logout}=useContext(AuthContext);
  const {islight,ToggleTheme,theme}=useContext(ThemeContext);
  console.log(theme);
  return (
    <div>Navbar
      <button onClick={()=>{
        if(isAuthorized){
          logout();
        }
        else{
          login("R","Z")
        }
      }}>{isAuthorized ? "Logout" :"Login"}</button>
      <button onClick={ToggleTheme}>{`Make ${theme==="light" ? "light" :"dark"}`}</button>

        <Wishlist/>
    </div>
  )
}

export default Navbar