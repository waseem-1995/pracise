import React from 'react'
import BookCard from './BookCard'
import styled from "styled-components"

const BookList = ({books}) => {
  return (
    
    <>
    {books.length>0 && books.map((singleBook)=>(
       < BookCardWrapper>
        <BookCard key={singleBook.id} booksData={singleBook}/>
       </BookCardWrapper>
     
    ) )}
    </>
    
  )
}

export default BookList

const BookCardWrapper=styled.div`
border:1px solid blue;
padding:5px;
width:310px;


`