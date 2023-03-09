import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0);

    useEffect(()=>{
        let id= setInterval(()=>{
            if(timer>=100){
                clearInterval(id);
            }
            else{
                setTimer(timer+1)
            }
            
        },5)
        return ()=>{
            clearInterval(id)  // call api to inform that user has logged out.
        }
},[timer])
  return (
    <div>Count up :{timer}</div>
  )
}

export default Timer