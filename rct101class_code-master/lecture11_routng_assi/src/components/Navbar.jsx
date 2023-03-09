import React from 'react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const Navigate=useNavigate(); 
    const handleOnclick=(id)=>{
      if(id===1){
        Navigate("/products/1")
      }
    }
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <button onClick={()=>handleOnclick(1)}>Go to Product 1</button>
        <button onClick={()=>handleOnclick(2)}>Go to product2</button>
    </div>
  )
}

export default Navbar