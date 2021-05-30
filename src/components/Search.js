import React, { useState, useReducer, } from 'react'
import styled from 'styled-components'

import SearchInput from './SearchInput'
import ResultsList from './ResultsList'
import Filters from './Filters'
import Sort from './Sort'

export const SearchContainer = styled.section`

`

export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
`

const initialState = {
    loading: true,
    filterActive: false,
    error: '',
    results: JSON.parse(localStorage.getItem('searchResults')) || [],
    filteredResults: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'search':
            return {
                ...state,
                loading: false,
                results: action.searchResults,
                error: ''
            }
        case 'filter':
            const filtered = state.results.filter((result) => result.language === action.name)
            return {
                ...state,
                filterActive: true,
                filteredResults: filtered
            }
        case 'sort':
            if(state.filterActive) {
                const sortedResults = state.filteredResults.sort((a, b) => b.stargazers_count - a.stargazers_count)
                return {
                    ...state,
                    filteredResults: sortedResults
                }
            }
            const sortedResults = state.results.sort((a, b) => b.stargazers_count - a.stargazers_count)
            return {
                ...state,
                results: sortedResults
            }
        case 'default':
            return {
                ...state,
                results: JSON.parse(localStorage.getItem('searchResults'))
            }
        default:
            return state
    }
}
const Search = (props) => {
    
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <SearchContainer>
            <SearchInput 
                setLoading={setLoading} 
                setResults={dispatch} 
            />
            <OptionsContainer>
                <Filters 
                    results={state.results}
                    setLanguage={dispatch}
                />
                <Sort 
                    sortResults={dispatch}
                />
            </OptionsContainer>
            <ResultsList 
                loading={loading}
                results={state.results}
                filterActive={state.filterActive}
                filteredResults={state.filteredResults}
            />
        </SearchContainer>
    )
}

export default Search