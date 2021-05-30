import React from 'react'
import styled from 'styled-components'

import Dropdown from './Dropdown'

export const SortContainer = styled.div``
export const SortItem = styled.div``

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

const Sort = ({ sortResults }) => {
    return (
        <Dropdown 
            dropdownOptions={sortOptions}
            dispatch={sortResults}
            title={'Sort By'}
        />
    )
}

export default Sort