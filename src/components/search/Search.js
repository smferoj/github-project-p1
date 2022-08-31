import React, { useState } from 'react'
import './search.css';
import{BsSearch}from 'react-icons/bs'

const Search = ({setUsername}) => {

const[userInput, setUserInput] = useState('')

//console.log(userInput)

const getdata=(e)=>{
   setUserInput(e.target.value)
}

  const getInputdata=(e)=>{
    e.preventdefault()
   setUsername(userInput)

  }
  return (
    <div>
    <div className='search'>
      <BsSearch className='search_logo'/>
      
      <form onSubmit={getInputdata}>
      <input onChange ={getdata} value ={userInput} type="text" /> 
      <button type='onsubmit'> search </button>

      </form>
     
      
     
    </div>
    </div>
  )
}

export default Search