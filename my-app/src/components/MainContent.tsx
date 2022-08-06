import { useContext } from "react"
import { AppGlobalContext } from "../App"
import styled from "styled-components"

export const MainContentContainer = styled.div`
  width: 100vw;
  height: 80vh;
  background: white;
`

export const MainContent = () => {
    const AppContext = useContext(AppGlobalContext)
    console.log(AppContext)

    return (
        < MainContentContainer >
            {/*<input value={AppContext.getProperties.dropsByRun} onChange={(event) => AppContext.setProperties.setDropsByRun(event.target.value)} type="text"></input>
            <input value={AppContext.getProperties.timeBetweenDrops} onChange={(event) => AppContext.setProperties.setTimeBetweenDrops(event.target.value)} type="text"></input>*/}
        </MainContentContainer >
    )

}

export default MainContent;