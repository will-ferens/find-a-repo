import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
    list-style: none;
`

const ResultsList = ({ results, filterActive, filteredResults }) => {
    if(filterActive) {
        return (
            <List>
                {
                    filteredResults ? filteredResults.map((result) => {
                        return (
                            <li key={result.id}>
                                <Link to={`/repo/${result.id}`}>
                                    {result.name}
                                </Link>
                            </li>
                        ) 
                    }) : null
                }
            </List>
        )
    }
        return (
            <List>
                {
                    results ? results.map((result) => {
                        return (
                            <li key={result.id}>
                                <Link to={`/repo/${result.id}`}>
                                    {result.name}
                                </Link>
                            </li>
                        ) 
                    }) : null
                }
            </List>
        )
}

export default ResultsList