import React, { createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { postBagData } from "../redux/Cart/action";

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [event, setEvent] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [data, setData] = useState([]);
  var [count, setCount] = useState(0);
  const [isInput,setIsInput] = useState("");
  const dispatch = useDispatch();

  const handleEvent = (e, c) => {
    setEvent(e);
    console.log(e);
    console.log(c);
    setChecked(c);
  };
  const handleInput = (e)=>{
    console.log(e,"input");
    setIsInput(e);
  }
  const handleData = (e) => {
    setData(e);
  };
  const addToData = (ele) => {
    console.log(ele);
    dispatch(postBagData(ele));
    count = count + 1;
    setCount(count);
  };
  return (
    <FilterContext.Provider
      value={{
        event,
        handleEvent,
        isChecked,
        handleData,
        data,
        addToData,
        count,
        handleInput,
        isInput
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
