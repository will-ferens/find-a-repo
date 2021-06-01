import React, { useState } from 'react'
import styled from 'styled-components'

import * as theme from '../constants/theme'

export const FormWrapper = styled.div`
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-width: 295px;
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
    width: 100px;
    margin-top: 16px;
    &:hover {
        background-color: ${theme.primaryColor};
        color: #fff;
        transition: all 0.3;
    }
    &:focus {
        outline: none;
    }
`
export const ErrorMessage = styled.div`
    height: 18px;
    color: #D8000C;
    text-align: center;
`
const REPOSITORY_API_URL = `https://api.github.com/search/repositories`

const SearchInput = ({ setResults, setLoading }) => {
    const [errors, setErrors] = useState({})
    const [term, setTerm ] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        validate(term)
    }

    // On change, set term
    const handleInput = (event) => {
        setTerm(event.target.value);
    }

    // Validate search term
    const validate = (input) => {
        // Ensure input is not an empty string
        if(input.length === 0 || !input.trim()) {
            setErrors({empty:'Search term must not be empty. Please enter a search term.'})
        } else if(input.length >= 256) {
            setErrors({long: 'Search term must be less than 256 characters! Sheesh.'})
        } else {
            // Empty errors object and run search
            setErrors({})
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
                    
                    // If previous search is found in storage, remove
                    if(localStorage.getItem('searchResults') !== null) {
                        localStorage.removeItem('searchResults')
                    }
                    localStorage.setItem('searchResults', JSON.stringify(response.items))
                    setLoading(false)
                })
                .catch(error => console.log(error))
        }
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
            <ErrorMessage>
                <p>{ errors.empty ? errors.empty : null}</p>
                <p>{ errors.long ? errors.long : null}</p>
            </ErrorMessage>
        </FormWrapper>
    )
}

export default SearchInput