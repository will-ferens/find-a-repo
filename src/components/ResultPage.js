import React from 'react'
import { Link } from 'react-router-dom'

import Svg from './Svg'

import styled from 'styled-components'

import * as icons from '../constants/icons.js'
import * as theme from '../constants/theme.js'


export const ResultContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 350px;
`
export const ResultCard = styled.div`
    box-shadow: ${theme.boxShadow};
    border-radius: ${theme.borderRadius};
    display: grid;
    margin: 24px;
    grid-template-rows: 1fr 1fr;
`
export const ResultHeader = styled.header`
    background: ${theme.primaryColor};
    color: #fff;
    border-radius: ${theme.borderRadius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 24px solid ${theme.primaryColor};
    a {
        color: ${theme.accentColor};
        text-decoration: none;
        font-weight: bold;
    }
`
export const Avatar = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 50px;
`
export const ResultDetails = styled.div`
    padding: 24px;
    p {
        padding: 6px 0;
    }
`
export const RepoStats = styled.div`
    padding: 4px 0;
    span {
        padding: 0 4px;
    }
`

const ResultPage = ({ result }) => {
    return(
        <ResultContainer>
            <Link to={'/'}>back</Link>
            <ResultCard>
                <ResultHeader>
                    <Avatar src={ result.owner.avatar_url } />
                    <h2>{ result.full_name }</h2>
                    <a href={ result.html_url }>See the repo</a>
                </ResultHeader>
                <ResultDetails>
                    <RepoStats>
                        <Svg icon={icons.Fork} />
                        <span>
                            { result.forks_count }
                        </span>
                        <span>
                            Forks
                        </span>
                    </RepoStats>
                    <RepoStats>
                        <Svg icon={icons.Watcher} />
                        <span>
                            { result.watchers_count }
                        </span>
                        <span>
                            Watchers
                        </span>
                    </RepoStats>
                    <RepoStats>
                        <Svg icon={icons.Issue} />
                        <span>
                            { result.open_issues_count }
                        </span>
                        <span>
                            Open Issues
                        </span>
                    </RepoStats>
                    <RepoStats>
                        { result.private ? <Svg icon={icons.Private} /> : <Svg icon={icons.Public} /> }
                        <span>
                            { result.private ? 'Private Repo' : 'Public Repo'}
                        </span>
                    </RepoStats>
                    <p>{ result.language }</p>
                    <p>{ result.description }</p>
                </ResultDetails>
            </ResultCard>
        </ResultContainer>
    )
}

export default ResultPage