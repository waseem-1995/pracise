import React from "react";

const Product = ({id,name,description}) => {
  // You can change this variable value to each product id

  return (
    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count"></span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>
  );
};

export default Product;
