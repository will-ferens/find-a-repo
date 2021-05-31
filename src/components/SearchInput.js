import React, { useState } from 'react'
import styled from 'styled-components'

import * as theme from '../constants/theme'

export const FormWrapper = styled.div`
    width: 100%;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const TextInput = styled.input`
    border-radius: ${theme.borderRadius};
    border: ${theme.mainBorder};
    line-height: 25px;
    padding: 4px 16px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: ${theme.primaryColor}
    }
`

export const SubmitInput = styled.input`
    align-self: center;
    background: #fff;
    text-transform: uppercase;
    padding: 4px 6px;
    color: ${theme.primaryColor};
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.primaryColor};
    cursor: pointer;
    width: 33%;
    margin-top: 16px;
    &:hover {
        background-color: ${theme.primaryColor};
        color: #fff;
        transition: all 0.3;
    }
`

const REPOSITORY_API_URL = `https://api.github.com/search/repositories`

const SearchInput = ({ setResults, setLoading }) => {

    const [term, setTerm ] = useState('')

    const handleInput = (event) => {
        setTerm(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch(
            `${REPOSITORY_API_URL}?q=${term}`,
            {
                method: 'GET',
                headers: { 'Accept': 'application/json' }
            }
        )
            .then(response => response.json())
            .then(response => {
                setResults({
                    type: 'search',
                    searchResults: response.items
                })
                if(localStorage.getItem('searchResults') !== null) {
                    localStorage.removeItem('searchResults')
                }
                console.log('howdy')
                localStorage.setItem('searchResults', JSON.stringify(response.items))
                setLoading(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <TextInput 
                    type="text"
                    value={term}
                    onChange={handleInput}
                />
                <SubmitInput 
                    type="submit"
                />
            </Form>
        </FormWrapper>
    )
}

export default SearchInput