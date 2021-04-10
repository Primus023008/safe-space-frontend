import React,{ useState } from 'react'
import './search.css'

const Search = () => {
    const [searches, setSearches] = useState(false);
    const searchHandler = () => {
        setSearches(!searches);
    }
    return (
        <div>
            <div className='banner'></div>
            <div className='search-bar'>
                <input className='input-search' placeholder='Explore doctors or organisations' type='text'/>
                <i onClick={searchHandler} className={!searches?'fa fa-search':'fa fa-times'}></i>
            </div>
           {!searches?
            <> 
                <h3>Recent Searches</h3>
                <p className='search-p'>Heed India, Children and Education</p>
                <p className='search-p'>Heed India, Children and Education</p>
                <p className='search-p'>Heed India, Children and Education</p>
            </>:
            <div className='search-results'>
                <p className='query'>Heed India, Children and Education</p>
                <p className='query'>Heed India, Children and Education</p>
                <p className='query'>Heed India, Children and Education</p>
                
            </div>
            }
        </div>
    )
}

export default Search
