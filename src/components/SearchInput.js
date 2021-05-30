import React, { useState } from 'react'
import styled from 'styled-components'

export const FormWrapper = styled.div`

`
export const Form = styled.form`

`

export const TextInput = styled.input`

`

export const SubmitInput = styled.input`

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