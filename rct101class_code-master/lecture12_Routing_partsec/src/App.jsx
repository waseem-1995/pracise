import { useState } from 'react'
import logo from './logo.svg'
import './App.css' ;
import Navbar from "./components/Navbar";
import {Routes,Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import Feed from "../src/Pages/Feed";
import Login from "../src/Pages/Login"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/feed" element={<Feed/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

        
      </Routes>
    </div>
  )
}

export default App
