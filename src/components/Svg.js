import React from 'react'

// Presentational component for SVG's
// It's DRY and cleans up a lot of code

const Svg = ({ icon, viewBox }) => {
    return (
        <svg viewBox={viewBox ? viewBox : '0 0 16 16'} version="1.1" width="16" height="16" aria-hidden="true">
            <path fillRule="evenodd" d={icon}></path>
        </svg>
    ) 
}

export default Svg