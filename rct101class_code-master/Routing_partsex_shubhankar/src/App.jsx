
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import Feed from './Components/Feed';
import Login from './Components/Login';
import RequiredAuth from './Hoc/RequiredAuth';
import { Posts } from './Components/Posts';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path="" element={<Home></Home>}></Route>

       <Route path="/feed" element={
         <RequiredAuth>
           <Feed></Feed>
         </RequiredAuth>
       
       }></Route>

      <Route path="/posts" element={
         <RequiredAuth>
           <Posts></Posts>
         </RequiredAuth>
       
       }></Route>

       <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
