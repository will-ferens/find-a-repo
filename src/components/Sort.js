import React from 'react'

import Dropdown from './Dropdown'

// Define sort options
const sortOptions = [
    {
        name: 'Best Match',
        type: 'default',
        id: 1
    },
    {
        name: 'Stars',
        type: 'sort',
        id: 2
    }
]

const Sort = ({ results, sortResults }) => {
    // Ensure results exist before render
    if(results && results.length > 0) {
        return (
            <Dropdown 
                dropdownOptions={sortOptions}
                dispatch={sortResults}
                title={'Sort By'}
            />
        )
    }
    return null
}

export default Sort