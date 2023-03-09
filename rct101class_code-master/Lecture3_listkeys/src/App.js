import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Counter} from "./components/Counter";
import{TodoApp} from "./components/TodoApp";


function App() {
  const [toggle,setToggle]=useState(false);
  return (
    <div className="App">
    <button onClick={()=>{
      setToggle(!toggle);
    }}>{ toggle ? "show To do App" :"Show Counter App"}</button>

    {toggle ? <Counter/> : <TodoApp/>}
    </div>
  );
}

export default App;


{/* <div>{false}</div>
<div>{null}</div>
<div>{undefined}</div>
<div></div>
<div>true</div> */}

// shows nothing.

// if first component is to be shown is is to be rendered and sec need not to be shown then use this...

// {toggle && <Counter/>}
