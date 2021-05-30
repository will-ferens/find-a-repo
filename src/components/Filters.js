import React, { useState, } from 'react'

import styled from 'styled-components'

const FiltersContainer = styled.div`
`

const LanguageList = styled.ul`

`

const LanguageItem = styled.li``


const Filters = ({ results, setLanguage }) => {

    let languageFilters
    if(results && results.length > 0) {
        let arrayOfLanguages = results.map((result) => {
            return result.language
        })
        languageFilters = [...new Set (arrayOfLanguages)]
    }
    
    return (
        <FiltersContainer>
            <LanguageList >
            {
                languageFilters ? languageFilters.map((language) => {
                    return (
                        <LanguageItem 
                            key={language}
                            onClick={() => setLanguage({
                                type: 'filter',
                                language: language
                            })}
                        >
                            {language ? language : 'Not Specified'}
                        </LanguageItem>
                    )
                }) : null
            }
            </LanguageList>
        </FiltersContainer>
    )
}

export default Filters