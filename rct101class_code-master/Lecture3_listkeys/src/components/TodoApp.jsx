import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoItems from './TodoItems';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

const TodoApp = () => {
    const [todos,setTodos]=useState([]);

    const addtodo=(newtodo)=>{
  setTodos([...todos,{
    id:uuidv4(),
    value:newtodo
  }])
    }
  const deletetodo=(value)=>{
  setTodos(todos.filter((todo)=>todo.value!=value))
  }


  return (
    <div>
        TodoApp
        <TodoInput addtodo={addtodo}/>
        <TodoList>
      
        {todos.map((todo)=>(
          <TodoItems key={todo.id} value ={todo.value} deletetodo={deletetodo}/>
        ))}
    
        </TodoList>
        
        </div>
  )
}

export  {TodoApp}