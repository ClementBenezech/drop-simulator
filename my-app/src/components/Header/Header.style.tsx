import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const StyledLogo = styled(FontAwesomeIcon)`
width: 80px;
height: 80px;
border-radius: 50%;
font-size: 40px;
background-color: #00bde3;
padding: 8px;
color:white;
box-shadow: 4px 4px 8px grey;
margin-left: 50px;
margin-right: 50px;
`

export const HeaderContainer = styled.div`
  width: 100vw;
  height: max-content;
  background: transparent;
  display: flex;
  align-items:center;
  font-family:"Raleway";
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items:flex-start;
    justify-content: flex-start;
    height: max-content;
    padding: 8px 12px;
    border: 1px solid lightgrey;
    margin: 8px;
    border-radius: 6px;
    box-shadow: 4px 16px 46px #c7c7c746;
`

export const ComputedDataContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 65%;
    align-items:center;
    color: black;
    height: 100%;
    flex-wrap: wrap;
`


export const StyledKeyInfoLabel = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
    background: #b6efff27;
    border-left:1px solid lightgrey;;
    width: 45%;
    height: 50px;
    font-size: 16px;
    padding: 0 24px;
    margin-left: 24px;
    text-align:left;

`

export const StyledKeyInfoValue = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
    background: #ffffff2e;
    border: 1px solid lightgrey;;
    border-radius: 4px;
    padding: 4px;
    margin-left: 8px;
    height: 20px;
    font-size: 12px;
`

export const StyledKeyInfoIcon = styled(FontAwesomeIcon)`
    display: flex;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;
    border: 1px solid transparent;
    border-radius: 2px;
    margin: 4px 0;

    width: 35px;
    color: #0095c3;
    font-size: 20px;
    &:nth-child(1) {
        color: #d700ba;
        margin-left: 24px;
    }
    &:nth-child(3) {
        color: #15d700;
    }
`

export const StyledAlertIcon = styled(FontAwesomeIcon)`
    display: flex;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;

    background: #ffffff;
    border-radius: 50%;
    margin: 4px 0;
    width: 20px;
    color: #ff2a04;
    font-size: 20px;
`

export const StyledOkIcon = styled(FontAwesomeIcon)`
    display: flex;
    width: fill-available;
    align-items: center;
    justify-content: space-between;
    background: #f8f8f8;

    background: #ffffff;
    border-radius: 50%;
    margin: 4px 0;
    width: 20px;
    color: #009728;
    font-size: 20px;
`

export const StyledKeyInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: fill-available;
    align-items: center;
    justify-content: flex-start;
    background: #f8f8f8;
    border: 1px solid lightgrey;
    overflow: hidden;
    border-radius: 6px;
    margin: 4px 0;
    height: 54px;
    width: 90%;
    
`