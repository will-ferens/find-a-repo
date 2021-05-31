import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Svg from './Svg'

import * as icons from '../constants/icons.js'
import * as theme from '../constants/theme.js'

export const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
export const ListItemWrapper = styled.li`
    margin: 0;
    padding: 12px;
    border-radius: ${theme.borderRadius};
    box-shadow:${theme.boxShadow};
    a {
        color: #333;
        text-decoration: none;
    }
`

export const ItemHeader = styled.div`
    padding-bottom: 6px;
    color: ${theme.accentColor};
    font-weight: bold;
`

export const ItemDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const ListItem = ({ result, setSelectedResult }) => {
    return (
        <ListItemWrapper 
            onClick={
                () => {
                    setSelectedResult({type: 'select', result: result})
                    localStorage.setItem('selectedResult', JSON.stringify(result))
                }

            } >
            <Link to={`/repo/${result.id}`}>
                <ItemHeader>
                    {result.full_name}
                </ItemHeader>
                <ItemDetails>
                    <span>
                        <Svg icon={icons.Star} />
                        { result.stargazers_count }
                    </span>
                    <span>{ result.language }</span>
                    <span>
                        { result.private ? <Svg icon={icons.Private} /> : <Svg icon={icons.Public} /> }
                    </span>
                </ItemDetails>
            </Link>
        </ListItemWrapper>
    )
}

const ResultsList = ({ results, filterActive, filteredResults , setSelectedResult }) => {
    if(filterActive) {
        return (
            <List>
                {
                    filteredResults ? filteredResults.map((result) => {
                        return (
                            <ListItem 
                                setSelectedResult={setSelectedResult}
                                key={result.id} 
                                result={result} 
                            />
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
                        <ListItem 
                            setSelectedResult={setSelectedResult}
                            key={result.id} 
                            result={result} 
                        />
                    ) 
                }) : null
            }
        </List>
    )
}

export default ResultsList