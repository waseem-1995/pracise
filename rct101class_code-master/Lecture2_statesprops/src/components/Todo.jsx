import React from 'react'
import { useState } from 'react'
import "./Todo.css"
import {TodoItems} from "./TodoItems"

export const Todo = () => {
    const [value,setValue]=useState("");
    const [todos,setTodos]=useState([]);

    const onDelete=(id)=>{
  let newTodos= todos.filter((todo)=>todo.id!==id);
  setTodos(newTodos);
    }
  return (
    <div>
        Todo
        <input type="enter to do" value={value} onChange={(e)=>{
            setValue(e.target.value);
            //console.log(e);
            
        }}/>
        <button onClick={()=>{
            // setTodos([...todos,{ id:Date.now(),value:value,isCompleted:false}]);
            {value==="" ? alert("please add todo") : setTodos([...todos,{ id:Date.now(),value:value,isCompleted:false}])}
            setValue("")}}>Add</button>
            <div className='todolist'>
        {todos.map((todo)=>(
           <TodoItems key={todo.id} todo={todo} onDelete={onDelete}/>
           
        ))}
        </div>
        </div>
  )
}
