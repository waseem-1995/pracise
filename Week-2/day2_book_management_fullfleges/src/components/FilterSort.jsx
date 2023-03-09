import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { getBooks } from '../Redux/action'

const FilterSort = () => {
    const [searchParams,setSearchParams]=useSearchParams()

    const urlCategory=searchParams.getAll("category")
    const urlSort=searchParams.get("sortBy")
    const [category,setCategory]=useState(urlCategory|| [])
 
    const [sortBy,setSortBy]=useState(urlSort||"")
    const dispatch=useDispatch()

    const handleCheckbox=(e)=>{
   const option=e.target.value

   //if the option is already present then remove it ,else add it
    let newCategory=[...category]
    if(category.includes(option)){
        // remove it
        newCategory.splice(newCategory.indexOf(option),1)
    }
    else{
        newCategory.push(option);
    }

    setCategory(newCategory)
    }

    const handleSort=(e)=>{
        setSortBy(e.target.value)
    }

    useEffect(()=>{
    if(category){
        setSearchParams({category:category})
        dispatch(getBooks({params:{category}}))
    }
    },[category,setSearchParams,dispatch])

    useEffect(()=>{
        if(sortBy){

            const params={
                category: searchParams.getAll("category"),
                sortBy
            }

            const getBooksParams={
                params:{
                    category:searchParams.getAll("category"),
                    _sort:"release_year",
                    _order:sortBy,
                }
            }
            setSearchParams(params)
            dispatch(getBooks(getBooksParams))
        }
    },[searchParams,sortBy,setSearchParams,dispatch])

    //console.log(category)

    console.log(sortBy)
  return (
    <div>
        <h3>Filters</h3>
        <div>
            <div>
                <input type="checkbox"  value="Novel" checked={category.includes("Novel")} onChange={handleCheckbox}/>
                <label>Novel</label>
            </div>
            <div>
                <input type="checkbox"  value="Science_Fiction" checked={category.includes("Science_Fiction")} onChange={handleCheckbox} />
                <label>Science_Fiction</label>
            </div>
            <div>
                <input type="checkbox"  value="Motivational" checked={category.includes("Motivational")} onChange={handleCheckbox}/>
                <label>Motivational</label>
            </div>
            <div>
                <input type="checkbox"  value="Thriller" checked={category.includes("Thriller")} onChange={handleCheckbox} />
                <label>Thriller</label>
            </div>
        </div>

        <h3>Sort</h3>
        <div onChange={handleSort}>
            <input type="radio"  value="asc" name="sortBy" defaultChecked={sortBy==="asc"}/> Ascending
            <input type="radio" value="desc"  name="sortBy" defaultChecked={sortBy==="desc"}/> Decending
        </div>
    </div>
  )
}

export default FilterSort