import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import * as theme from '../constants/theme'


export const ResultContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ResultCard = styled.div`
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    padding: 24px;
`
export const ResultHeader = styled.header``
export const Avatar = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50px;
`
export const ResultDetails = styled.div``

const ResultPage = ({ result }) => {
    console.log(result)
    return(
        <ResultContainer>
            <Link to={'/'}>back</Link>
            <ResultCard>
                <ResultHeader>
                    <Avatar src={ result.owner.avatar_url } />
                    <h2>{ result.owner.login } / { result.name }</h2>
                </ResultHeader>
                <ResultDetails>
                    <div>
                        <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16">
                            <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                        </svg>
                        <span>{ result.forks_count }</span>
                    </div>
                </ResultDetails>
            </ResultCard>
        </ResultContainer>
    )
}

export default ResultPage