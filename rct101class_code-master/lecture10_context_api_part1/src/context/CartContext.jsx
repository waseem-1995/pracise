import React from "react";
import { createContext } from "react";

var Cartcontext=createContext();

export const CartContextProvider=({children})=>{
 return <Cartcontext.Provider></Cartcontext.Provider>
}