import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import Svg from './Svg'

import * as icons from '../constants/icons.js'
import * as theme from '../constants/theme.js'

export const DropdownContainer = styled.div`
    position: relative;
`
export const DropdownLabel = styled.label`
    padding: 3px 12px;
    border: ${theme.mainBorder};
    border-radius: 10px;
`

export const DropdownItemsWrapper = styled.div`
    display: none;
    &.visible {
        display: block;
    }
    position: absolute;
    width: 100%;
    margin-top: 4px;
    border-radius: ${theme.borderRadius};
    background-color: #fff;
    box-shadow: ${theme.boxShadow};
    
`
export const DropdownItem = styled.div`
    padding: 8px 8px 8px 24px;
    cursor: pointer;
    position: relative;
    &:first-child {
        border-radius: ${theme.borderRadius};
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    &:last-child {
        border-radius: ${theme.borderRadius};
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
    svg {
        position: absolute;
        left: 4px;
        top: 8px;
    }
    &:hover {
        background: #C8F3F7;
    }
    &.selected {
        background: ${theme.grey};
    }
`

const Dropdown = ({ title, dropdownOptions, dispatch }) => {
    const [open, setOpen] = useState(false)
    const [selected, setSeleced] = useState({})

    const ref = useRef()
    
    const checkViewBox = '0 0 24 24'

    useEffect(() => {
        const onBodyClick = event => {
          // Check if element that was clicked is inside of ref'd component
          // If so no action is required from this event listener so exit
        if (ref.current && ref.current.contains(event.target)) {
            return
        }
          // Else close the dropdown
            setOpen(false)
        }
    
        // Add event listener
        document.body.addEventListener("click", onBodyClick)
    
        // Remove event listener to avoid ref null error
        return () => {
            document.body.removeEventListener("click", onBodyClick)
        }
    }, [])

    return (
        <DropdownContainer ref={ref}>
            <DropdownLabel onClick={() => setOpen(!open)}>{title}</DropdownLabel>
            <DropdownItemsWrapper  className={`${open ? "visible" : ""}`}>
                {
                    dropdownOptions.map(option => {
                        return (
                            <DropdownItem 
                                onClick={
                                    () => {
                                        dispatch({
                                            type: option.type,
                                            name: option.name
                                        })
                                        setSeleced(selected.name === option.name ? {} : option)
                                        setOpen(!open)
                                    }
                                }
                                key={option.name}
                                className={selected.name === option.name ? 'selected' : ''}
                            >
                                { selected.name === option.name ? <Svg icon={icons.Check} viewBox={checkViewBox} /> : null }
                                { option.name }
                            </DropdownItem>
                        )
                    })
                }
            </DropdownItemsWrapper>
        </DropdownContainer>
    )
}

export default Dropdown