import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const StyledInput = styled.input`
    width: 30px;
    border: none;
    border: 1px solid transparent;

    transition: 150ms border, 150ms color;
    color: #808080;
    text-align:center;
    &:hover {

            border-bottom: 1px solid #0ed7ff;
            border-right: 1px solid #0ed7ff;
        }

    &:focus {
        box-shadow: 1px 1px 2px grey;
        color: #0e93ff;
        outline: none;
    }
`

export const StyledIcon = styled(FontAwesomeIcon)`
    color: #2a9bfd;
    margin: 0 4px;
    margin-right: 12px;
`

export const StyledEditIcon = styled(FontAwesomeIcon)`
    color: #009be2;
    margin: 0 12px;
    font-size: 12px;
    color: transparent;
`


export const StyledLabel = styled.label`
    font-size: 20px;
    margin-right: 10px;
    width: 65%;
    text-align: left;
`

export const InputContainer = styled.div`
    display: flex;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    padding: 4px;
    border: 1px solid transparent;
    border-radius: 2px;

    margin: 4px 0;
    &:nth-child(odd) {
        background: #fffbfb;
        ${StyledIcon} {
            color: #0088ff;
        }
    }
    &:hover {
        background: white;
        border: 1px solid #0ed7ff;
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
`