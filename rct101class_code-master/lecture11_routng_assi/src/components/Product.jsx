import React from 'react';
import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";

const Product = () => {
    const {id}=useParams(); //it is used to read the parameter.
    //console.log(id);
    const [Product,setProduct]=useState({});

    useEffect(()=>{
      fetch(`http://localhost:8080/products/${id}`)
      .then((r)=>r.json())
      .then((data)=>setProduct(data));
    },[id])
  return (
    <div>Product :{id}
    <div>{Product.name}</div>
    </div>
  )
}

export default Product