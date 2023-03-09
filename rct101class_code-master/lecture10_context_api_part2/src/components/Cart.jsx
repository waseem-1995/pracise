import React from 'react'
import { CartContext } from '../Context/CartContext';
import { useContext } from 'react';

const Cart = () => {

  const {count,setCount}=useContext(CartContext)
  return (
    <div>Cart
        <button onClick={()=>setCount(count+1)}>Add to cart</button>
    </div>
  )
}

export default Cart