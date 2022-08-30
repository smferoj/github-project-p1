import React from 'react'
import './search.css';
import{BsSearch}from 'react-icons/bs'

const Search = () => {
  return (
    <div>
    <div className='search'>
      <BsSearch className='search_logo'/>
      <input type="text"></input>
     <button> search </button>
      
     
    </div>
    </div>
  )
}

export default Search