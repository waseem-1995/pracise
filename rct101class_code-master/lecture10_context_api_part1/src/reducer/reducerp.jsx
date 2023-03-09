import React from 'react';
import { useReducer } from 'react';

const reducer=(state,{type,payload})=>{
    switch(type){
      case "INCREMENT":{
        return state+payload;
      }
      case "DECREMENT":{
        return state-payload;
      }
      case "DEFAULT":{
        return state;
      }
    }
  }

const reducerp = () => {

    const [counter,dispatch]=useReducer(reducer,0)
  return (
    <div>
         Counter:{counter}
     <div>
       <button onClick={()=>dispatch({type:"DECREMENT",payload:1})}>-</button>
       <button onClick={()=>dispatch({type:"INCREMENT",payload:1})}>+</button>
     </div>
    </div>
  )
}

export default reducer