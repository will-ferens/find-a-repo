import React from 'react'

import Dropdown from './Dropdown'

const Filters = ({ results, setLanguage }) => {

    // Define language filters and ensure Results before render
    let languageFilters
    if(results && results.length > 0) {
        // Return all languages form results
        let arrayOfLanguages = results.map((result) => {
            return result.language
        })
        // Remove all duplicate languages
        languageFilters = [...new Set (arrayOfLanguages)]
        
        // Create language filter array of objects, filling in 'None' for null field
        languageFilters = languageFilters.map((language) => ({ name: language ? language : 'None', type: 'filter'}))
        
        return (
            <Dropdown 
                dropdownOptions={languageFilters}
                dispatch={setLanguage}
                title={'Filter By Language'}
            />
        )
    }

    return null
    
}

export default Filters