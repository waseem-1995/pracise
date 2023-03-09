
import  React, { useState } from "react";

export const Counter =()=>{

    const [count,setCount]=useState(0);

    //hooks are useState
    // hooks are set of react unbuilt functions used to interact with VDOM (virtual dom).
    //useState is a hook in react which is used to inform VDOM of the changes that need to be rendered.
    //it returns two things in array variable and a function to update their variable

    // state is information that is changing in DOM.

    // tree like structure from a component .

    //return statement return a single element from components thats why we wrappe it with div .
    // it we don't wrapp with div then we have to wrapp with <fragment></fragment> or <> </> and do import fragment from react.

    return (
        <div>
            <h3>Counter App:{count}</h3>
            <button onClick={()=>{
                setCount(count+1)
            }}>incbutton</button>
            <button onClick={()=>{
                if(count>0){
                    setCount(count-1)
                }
                
            }}>decbutton</button>
        </div>
    )
}