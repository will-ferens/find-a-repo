import React from 'react'

import Header from './Header'
import Search from './Search'
import styled from 'styled-components'


export const Global = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = ({ selectedResult, setSelectedResult}) => {
    return (
        <Global>
            <Header />
            <Search  
                selectedResult={selectedResult}
                setSelectedResult={setSelectedResult}
            />
        </Global>
    )
}

export default Home