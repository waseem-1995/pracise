import React from 'react'

const TodoItems = ({value,deletetodo}) => {
  return (
    <div>
      <li>{value}
      <button onClick={()=>deletetodo(value)}>delete</button>
      
      </li>

     
    </div>
  )
}

export default TodoItems