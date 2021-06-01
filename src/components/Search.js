import React, { useState, useReducer, } from 'react'
import styled from 'styled-components'

import SearchInput from './SearchInput'
import ResultsList from './ResultsList'
import Filters from './Filters'
import Sort from './Sort'

export const SearchContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 24px;
`

export const SearchWrapper = styled.div`
    @media (min-width: 960px) {
        width: 420px;
    }
    @media (max-width: 540px) {
        width: 300px;
    }
`
export const HeaderContainer = styled.header`

`
export const HeaderTitle = styled.h1`
    text-align: center;
`
export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
`

const initialState = {
    loading: false,
    filterActive: false,
    filter: '',
    results: JSON.parse(localStorage.getItem('searchResults')) || [],
    filteredResults: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'search':
            return {
                ...state,
                loading: false,
                results: action.searchResults,
            }
        case 'filter':
            // Check for active filter; if present, return original results
            if(action.name === state.filter) {
                return {
                    ...state,
                    filterActive: false,
                    filter: '',
                    filteredResults: [],
                    results: JSON.parse(localStorage.getItem('searchResults'))
                }
            }
            const filtered = state.results.filter((result) => result.language === action.name)
            return {
                ...state,
                filterActive: true,
                filter: action.name,
                filteredResults: filtered
            }
        case 'sort':
            if(state.filterActive) {
                const sortedResults = state.filteredResults.sort((a, b) => b.stargazers_count - a.stargazers_count)
                return {
                    ...state,
                    filteredResults: sortedResults,
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
const Search = ({ setSelectedResult }) => {
    
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <SearchContainer>
            <SearchWrapper>
                <HeaderContainer>
                    <HeaderTitle>Find a Repo</HeaderTitle>
                </HeaderContainer>
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
                        results={state.results}
                        sortResults={dispatch}
                    />
                </OptionsContainer>
                <ResultsList 
                    loading={loading}
                    results={state.results}
                    filterActive={state.filterActive}
                    filteredResults={state.filteredResults}
                    setSelectedResult={setSelectedResult}
                />
            </SearchWrapper>
        </SearchContainer>
    )
}

export default Search