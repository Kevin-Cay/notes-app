import React from 'react'
import { MdSearch } from 'react-icons/md'

/**
 * 
 * @param {functino} param0 function to search the notes
 * @returns an element with the search icon
 */
export const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <MdSearch 
            className='search-icons' 
            size='1.3em' />
            <input 
            onChange={(e) => handleSearchNote(e.target.value)}  
            type='text' 
            placeholder='Search Notes..' />
        </div>
    )
}
