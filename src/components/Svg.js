import React from 'react'

const Svg = ({ icon }) => {
    return (
        <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fillRule="evenodd" d={icon}></path>
        </svg>
    ) 
}

export default Svg