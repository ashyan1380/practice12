import React from 'react'
import PropTypes from 'prop-types'
import './Search.css'

const Search = ({onSearch, search}) => {
    return (
        <div className='search-container'>
            <input 
                type="text" 
                value={search}
                className='search' 
                placeholder='Type Here...' 
                onChange={(e) => onSearch(e.target.value)}
            />
            <button onClick={()=>onSearch("")}>clear search</button>
        </div>
    )
}

Search.propTypes = {

}

export default Search
