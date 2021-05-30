import React, { useState, useReducer, } from 'react'
import styled from 'styled-components'

import SearchInput from './SearchInput'
import ResultsList from './ResultsList'
import Filters from './Filters'

export const SearchContainer = styled.section`

`
const initialState = {
    loading: true,
    filterActive: false,
    error: '',
    results: [],
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
            const filtered = state.results.filter((result) => result.language === action.language)
            return {
                ...state,
                filterActive: true,
                filteredResults: filtered
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
            <Filters 
                results={state.results}
                setLanguage={dispatch}
            />
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