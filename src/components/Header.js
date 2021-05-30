import React from 'react'
import styled from 'styled-components'


export const HeaderContainer = styled.header`

`
export const HeaderTitle = styled.h1`

`

const Header = (props) => {
    return (
        <HeaderContainer>
            <HeaderTitle>Find a Repo</HeaderTitle>
        </HeaderContainer>
    )
}

export default Header