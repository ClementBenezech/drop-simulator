import { useContext } from "react"
import { AppGlobalContext } from "../App"
import styled from "styled-components"

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  background: lightskyblue;
`

export const Header = () => {
    const AppContext = useContext(AppGlobalContext)
    console.log(AppContext)
    return <HeaderContainer>My Header</HeaderContainer>

}

export default Header;



