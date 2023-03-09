import React, { useEffect, useState } from 'react';
import {Link,Outlet} from "react-router-dom";

const Products = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/products")
        .then((r)=>r.json())
        .then((e)=>setData(e));
    },[])
  return (
    <div>

        {data.map((e)=>(
            <div key={e.id}>
     <Link to={`/Products/${e.id}`}>{e.name}</Link>
            </div>
         
           
        ))}
        <Outlet/>
    </div>
  )
}

export default Products