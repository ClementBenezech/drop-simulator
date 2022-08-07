import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { devices } from "../../utils/sizes"

export const StyledInput = styled.input`
    width: 200px;
    border: none;
    border: 1px solid transparent;
    position:relative;
    transition: 150ms border, 150ms color;
    color: #808080;
    text-align:center;
  
    @media ${devices.mobile} {
        position:absolute;
        top:20px;
        left:64px;
        max-width: 45vw;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: #2a9bfd;
    width: 10%;
    margin: 0 4px;
    margin-right: 0px;
    box-sizing: border-box;
    @media ${devices.mobile} {
        font-size: 20px;
        background: #fefefe;
        height: 30px;
        width: 30px;
        padding: 8px;
        border-radius: 50%;
        box-shadow: 2px 2Px 8Px #d2d2d2;
    }
`

export const StyledEditIcon = styled(FontAwesomeIcon)`
    color: #009be2;
    margin: 0 12px;
    font-size: 12px;
    color: transparent;
`


export const StyledLabel = styled.label`
    font-size: 16px;
    margin-right: 10px;
    width: 80%;
    text-align: left;
    @media ${devices.mobile} {
        font-size: 14px;
        position:absolute;
        top:4px;
        left:18%;
        width: 58%;
        text-align: left;

    }
`

export const StyledValue = styled.div`
    font-size: 20px;
    margin-right: 10px;
    min-width: 80px;
    max-width: 100px;
    text-align: center;
    border: 1px solid lightgrey;
    border-radius: 6px;
    margin: 0 8px;
    
`

export const InputContainer = styled.div`
    display: flex;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    padding: 4px;
    border: 1px solid lightgrey;;
    border-radius: 2px;
    position: relative;
    margin: 4px 0;
    height: 60px;
    &:nth-child(odd) {
        
        ${StyledIcon} {
            color: #0088ff;
        }
    }
    &:hover {
        background: white;

        ${StyledInput} {
            color: #0e93ff;
            border-bottom: 1px solid #0ed7ff;
        }
        ${StyledLabel} {
            color: #1d1d1d;
        }
        ${StyledEditIcon} {
            color: #3f3f3f;
        }
    }
    @media ${devices.mobile} {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 6px;
    padding: 0;
    height: 56px;
  }
`