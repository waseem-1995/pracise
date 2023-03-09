import React, { useState } from 'react'

const TodoInput = ({addtodo}) => {
    const [value,setValue]=useState("")
  return (
    <div>
   <input value={value} type="text" placeholder="New todo item" onChange={(e)=>{
       setValue(e.target.value)
   }}/>
  <button onClick={()=>{
      addtodo(value)
      setValue("")
  }}>Add</button>
    </div>
  )
}

export default TodoInput