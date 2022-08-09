import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { devices } from "../../utils/sizes"

export const StyledInput = styled.input`
    min-width: 100px;
    border: none;
    border: 1px solid transparent;
    position:relative;
    transition: 150ms border, 150ms color;
    color: #808080;
    text-align:center;
  
    @media ${devices.mobile} {
        width: 95%;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: #2a9bfd;
    margin: 0 4px;
    margin-right: 0px;
    box-sizing: border-box;
    height: 20px;
    width: 20px;
    padding: 8px;
    font-size: 5px;
    @media ${devices.mobile} {
        font-size: 10px;
        height: 20px;
        width: 20px;
        padding: 2px;
        background: #fefefe;
        border-radius: 50%;
        box-shadow: 2px 2Px 8Px #d2d2d2;
        display:none;
    }
`

export const SliderAndLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    @media ${devices.mobile} {
        width: 100%;
    }

`

export const StyledEditIcon = styled(FontAwesomeIcon)`
    color: #009be2;
    margin: 0 12px;
    font-size: 12px;
    color: transparent;
`


export const StyledLabel = styled.label`
    font-size: 14px;
    color: #2a2a2ad6;
    margin-right: 10px;
    min-width: 100%;
    text-align: left;
    padding-top: 3px;
    @media ${devices.mobile} {
        font-size: 12px;
        text-align: center;
    }
`

export const StyledValue = styled.div`
    font-size: 16px;
    margin-right: 10px;
    text-align: center;
    border-radius: 6px;
    margin: 0 8px;
    padding: 4px 0;
    height: 100%;
    display:flex;
    align-items:center;
    justify-content: center;
    color: #0088ff;
    font-weight: bold;
    width: 30%;
    @media ${devices.mobile} {
        font-size: 12px;
        width: 100%;
        text-align: center;
        height: 12px;

    }
    
`

export const InputContainer = styled.div`
    display: flex;
    height: 32px;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    align-items:center;
    background: #f8f8f8;
    padding: 4px;
    border: 1px solid lightgrey;;
    border-radius: 2px;
    position: relative;
    margin: 4px 0;
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
    width: 50%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 60px;
    flex-wrap: wrap;
    border: none;
  }
`