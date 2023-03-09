import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';


function App() {
  const {theme}=useContext(ThemeContext);
  return (
    <div className={`App ${theme==="light" ?"light" :"dark"}`}>
      
      <Navbar/>
     <Body/>
    
    
    </div>
  );
}

export default App;
