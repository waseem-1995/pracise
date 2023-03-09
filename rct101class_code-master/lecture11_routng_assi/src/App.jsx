import { useState } from 'react'
import logo from './logo.svg'
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products"
import Navbar from './components/Navbar';
import Product from "./components/Product"

function App() {
  

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="" element={<Home/>}></Route>
        <Route path="about/*" element={<About/>}></Route>
        <Route path="products/*" element={<Products/>}>

        <Route path=":id" element={<Product/>}></Route>
        </Route>
      
      </Routes>
    </div>
  )
}

export default App

// / is not mandatory.
//for nested info we need three chnages ---->
// 1. parent route should accept all info from url using *
// 2. wrap child with parent and remove duplicate path info
// use outlet tag on where we want show the child.