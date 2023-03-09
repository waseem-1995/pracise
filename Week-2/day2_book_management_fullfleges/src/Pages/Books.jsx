import React, { useEffect } from 'react'
import { getBooks } from '../Redux/action'
import { useDispatch,useSelector } from 'react-redux/es/exports'
import {store} from "../Redux/store"
import FilterSort from "../components/FilterSort"
import BookList from '../components/BookList'
import styled from "styled-components"

const Books = () => {


    const dispatch=useDispatch()

    const books=useSelector((store)=>store.books)
    useEffect(()=>{
  dispatch(getBooks())
    },[])

    console.log(books);
  return (
    <div>
        <h3>Books</h3>
        <BookpageWrapper>
            <FilterSortWrapper>
        <FilterSort/>
        </FilterSortWrapper>
        <BookListWrapper>
        <BookList books={books}/>
        </BookListWrapper>
        
        </BookpageWrapper>
    </div>
  )
}

export default Books


const BookpageWrapper=styled.div`

display:flex;
`

const FilterSortWrapper=styled.div`

border:1px solid red;
width:300px;
`
const BookListWrapper=styled.div`
border:1px solid black;
width:100%;
display:grid;
grid-template-columns:repeat(3,1fr);
grid-gap:16px;
justify-content:center;
padding:initial; 
`