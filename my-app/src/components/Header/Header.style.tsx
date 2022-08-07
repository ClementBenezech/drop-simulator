import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import { devices } from "../../utils/sizes"

export const StyledLogo = styled(FontAwesomeIcon)`
width: 80px;
height: 80px;
border-radius: 50%;
font-size: 40px;
background-color: #0088ff;
padding: 8px;
color:white;
box-shadow: 4px 4px 8px grey;
margin-left: 50px;
margin-right: 50px;
@media ${devices.mobile} {
    display: none;
  }

`

export const StyledTextLogo = styled.div`

font-size: 50px;
color: #0088ff;
padding: 0px;
margin-right: 50px;

font-family: 'Monoton'


`

export const HeaderContainer = styled.div`
  width: 100%;
  height: max-content;
  background: transparent;
  display: flex;
  align-items:center;
  font-family:"Raleway";
  @media ${devices.mobile} {
    flex-wrap: wrap;
  }
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
    @media ${devices.mobile} {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px;
    margin-bottom: 16px;
  }
`

export const ComputedDataContainer = styled.div`

    display: flex;
    justify-content: space-evenly;
    width: 20%;
    align-items:space-between;
    color: black;
    height: max-content;
    flex-wrap: wrap;

    @media ${devices.mobile} {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0;
  
  }
`


export const StyledKeyInfoLabel = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
    border-right:1px solid lightgrey;
    padding: 0 8px 0 8px;
    min-width: 100px;
    height: 50px;
    font-size: 0.9rem;
    text-align:right;


    @media ${devices.mobile} {
    width: 30%;
    min-width: 140px;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0 8px;
  
  }

`

export const StyledKeyInfoValue = styled.div`
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: flex-start;
    background: #ffffff2e;
    border-radius: 4px;
    height: 20px;
    font-size: 12px;
    width: 100px;
    margin-left: 4px;
    @media ${devices.mobile} {
     font-size:16px;
    }
`

export const StyledKeyValueLabelContainer = styled.div`
    display:flex;
    flex-wrap: wrap; 
    width: 70%; 
    align-items: center;
 `


export const StyledKeyInfoIcon = styled(FontAwesomeIcon)`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid transparent;
border-radius: 2px;
margin: 4px 0;
margin-left: 10px;
width: 20px;
color: #0095c3;
font-size: 20px;
padding: 16px;

`

export const StyledAlertIcon = styled(FontAwesomeIcon)`
display: flex;
width: fill-available;
align-items: center;
justify-content: space-between;
background: #f8f8f8;
border-radius: 50%;
margin: 4px 0;
width: 20px;
color: #ff2a04;
font-size: 20px;
`

export const StyledOkIcon = styled(FontAwesomeIcon)`
display: flex;
width: fill - available;
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
overflow: hidden;
border-radius: 6px;
margin: 4px 0;
height: max-content;
@media ${devices.mobile} {
    width: 100%;
    flex-wrap: nowrap;
}


`

export const StyledAlertMessage = styled.div`
display: flex;
flex-wrap: wrap;
width: fill-available;
align-items: center;
justify-content: flex-start;
overflow: hidden;

margin: 4px 0;
height: max-content;
text-align: justify;
width: 40%;
font-size: 13px;
color:black;
border-left: 2px solid red;
padding: 8px;

@media ${devices.mobile} {
    width: 100%;
    flex-wrap: nowrap;
}


`
