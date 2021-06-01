import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

import * as theme from '../constants/theme'

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
    padding: 8px 8px 8px 16px;
    cursor: pointer;
`

const Dropdown = ({ title, dropdownOptions, dispatch }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()
    
    useEffect(() => {
        const onBodyClick = event => {
          // check if element that was clicked is inside of ref'd component
          // if so no action is required from this event listener so exit
        if (ref.current && ref.current.contains(event.target)) {
            return
        }
          // else close the dropdown
            setOpen(false)
        }
    
        // add event listener
        document.body.addEventListener("click", onBodyClick)
    
        // remove event listener, avoid ref null error
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
                                        setOpen(!open)
                                    }
                                }
                                key={option.name}
                            >
                                {option.name}
                            </DropdownItem>
                        )
                    })
                }
            </DropdownItemsWrapper>
        </DropdownContainer>
    )
}

export default Dropdown