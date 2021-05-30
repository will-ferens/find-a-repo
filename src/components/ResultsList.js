import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
export const ListItemWrapper = styled.li`
    margin: 0;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    a {
        color: #333;
        text-decoration: none;
    }
`

export const ItemHeader = styled.div`
    padding-bottom: 6px;
`

export const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ListItem = ({ result }) => {
    return (
        <ListItemWrapper key={result.id}>
            <Link to={`/repo/${result.id}`}>
                <ItemHeader>
                    {result.owner.login} / {result.name}
                </ItemHeader>
                <ItemDetails>
                    <span>⭐️ { result.stargazers_count }</span>
                    <span>{ result.language }</span>
                    <span>{ result.private ? '🔒' : '📖'}</span>
                </ItemDetails>
            </Link>
        </ListItemWrapper>
    )
}

const ResultsList = ({ results, filterActive, filteredResults }) => {
    if(filterActive) {
        return (
            <List>
                {
                    filteredResults ? filteredResults.map((result) => {
                        return (
                            <ListItem result={result} />
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
                        <ListItem result={result} />
                    ) 
                }) : null
            }
        </List>
    )
}

export default ResultsList