import React, { useState } from 'react'

const TodoItems = ({todo ,onDelete}) => {

    const [isCompleted,setIsCompleted]=useState(todo.isCompleted)
  return (
    <div className='todo' key={todo.id}>
    <input type="checkbox" checked={isCompleted} onChange={(e)=>{
        setIsCompleted(e.target.checked)
    }} />
<div className={ isCompleted ? "striked" : ""}>{todo.value}</div>
<button onClick={()=>onDelete(todo.id)}>Delete</button>
</div>
  )
}

export  {TodoItems}