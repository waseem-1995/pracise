
import './App.css';
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Filters from "./components/Filters";
import Restaurents from './components/Restaurents';
import userinfo from "./data/userinfo.json";
import offers from "./data/offers.json";
import restaurents from "./data/restaurents.json"
import { useState } from 'react';

function App() {

  const [FilterBy,setFilterBy]=useState("");
  const[data,setdata]=useState(restaurents);

  const filters={
    1:"Cost High to Lost",
    2:"Cost Lost to High",
    3:"Ratings",
    4:"Delivery Time",
    5:"Relevance"
  }

  const updatefilter=(key)=>{
    switch(key){
      case "1":{
        setFilterBy(1);
        data.sort((a,b)=>b.costfortwo-a.costfortwo);
        setdata([...data]);
        break;
      }
      case "2":{
       setFilterBy(2);
       data.sort((a,b)=>a.costfortwo-b.costfortwo);   
       setdata([...data])
       break;
      }
      default:{
        
        setdata(restaurents);
        break;
      }
    }
  }
  
  return (
    <div>
     {/* code here */}

     <Navbar {...userinfo.location}/>
     <Offers offers={offers}/>
     <section className="near-you">
     <Filters  filters={filters} currentFilteredBy={FilterBy} updatefilter={updatefilter}/>
     <Restaurents restaurents={restaurents}/>
     </section>
    
    </div>
  );
}

export default App;
