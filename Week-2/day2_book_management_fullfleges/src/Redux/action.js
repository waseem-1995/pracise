import * as types from "./actionTypes"
import axios from "axios"


const getBooks=(params)=>(dispatch)=>{
    dispatch({type:types.GET_BOOKS_REQUEST})
    axios.get("http://localhost:8080/books",params)
    .then((r)=>dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data}))
    .catch((error)=>dispatch({type:types.GET_BOOKS_FAILURE}))
}

export {getBooks}