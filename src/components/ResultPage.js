import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'


export const ResultContainer = styled.main``

const ResultPage = () => {
    return(
        <ResultContainer>
            <Link to={'/'}>back</Link>
        </ResultContainer>
    )
}

export default ResultPage