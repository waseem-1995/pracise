import React from 'react';
import Cart from "./Cart";
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Product = () => {

  const {isAuthorized}=useContext(AuthContext);
  return (
    <div>Product :{isAuthorized ? "Logged in" :"Loggedout"}
   <Cart/>
    </div>
  )
}

export default Product