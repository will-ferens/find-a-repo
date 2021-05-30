import React from 'react'
import styled from 'styled-components'

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
        <SortContainer>
            {
                sortOptions.map((option) => {
                    return (
                        <SortItem 
                            onClick={() => sortResults({
                                type: option.type
                            })}
                            key={option.id}
                        >
                        {option.name}
                        </SortItem>
                    )
                })
            }
        </SortContainer>
    )
}

export default Sort