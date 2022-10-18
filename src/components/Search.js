import React from 'react'
import '../sass/Search.scss'

const Search = () => {
  return (
    <div className='search'>
        
        <div className="card">
            <h1>Search for a place to book and stay in japan</h1>
            <div className="container">
            </div>
        </div>

        <label htmlFor="search">
            <input type="search" name="search" id="search" placeholder='Search for places, properties, e.t.c' />
            <input type="submit" value="Search" id='search-input' />
        </label>

    </div>
  )
}

export default Search