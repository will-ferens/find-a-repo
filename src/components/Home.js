import React from 'react'

import Header from './Header'
import Search from './Search'
import styled from 'styled-components'

export const Global = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {
    return (
        <Global>
            <Header />
            <Search />
        </Global>
    )
}

export default Home