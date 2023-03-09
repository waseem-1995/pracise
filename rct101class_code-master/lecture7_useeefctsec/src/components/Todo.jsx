import React from 'react';
import axios from "axios";
import { useState } from 'react';
import { useEffect } from 'react';


const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [page,setPage]=useState(1);
    const [totalcount,setToatlCount]=useState(0);
    const [limit,setLimit]=useState(5)
    //console.log(page);
    //console.log(todos);
    
    useEffect(()=>{
       axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
       .then((r)=>{
       console.log(r);
       setTodos(r.data);
       setToatlCount(Number(r.headers["x-total-count"]))
    });
    
       
  
    },[page,limit] )
  
    return (
      <div className="App">
        
  
        <button disabled={page<=1}   onClick={()=>{
          if(page>1){
            setPage(page-1)
          }
          
        }}>{" "}{`<`} {" "}</button>
  
        <select onChange={(e)=>{
          setLimit(Number(e.target.value))
        }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <button disabled={totalcount<page*5}   onClick={()=>{
          setPage(page+1)
        }}>{" "}{`>`} {" "}</button>
        {todos.map((todo)=>(
          <div key={todo.id}>{todo.text}</div>
        ))}
        
      </div>
    )
}

export default Todo