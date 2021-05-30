import React from 'react'

import Dropdown from './Dropdown'

const Filters = ({ results, setLanguage }) => {

    let languageFilters
    if(results && results.length > 0) {
        let arrayOfLanguages = results.map((result) => {
            return result.language
        })
        languageFilters = [...new Set (arrayOfLanguages)]
        languageFilters = languageFilters.map((language) => ({ name: language ? language : 'None', type: 'filter'}))
    }
    
    return (
        <Dropdown 
            dropdownOptions={languageFilters}
            dispatch={setLanguage}
            title={'Filter By Language'}
        />
    )
}

export default Filters