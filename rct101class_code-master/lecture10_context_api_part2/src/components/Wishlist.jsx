import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Wishlist = () => {

  const {count}=useContext(CartContext);
  return (
    <div>Wishlist:{count}</div>
  )
}

export default Wishlist