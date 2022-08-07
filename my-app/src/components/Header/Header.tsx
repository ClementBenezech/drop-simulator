import { useContext } from "react"
import { AppGlobalContext } from "../../App"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import * as S from "./Header.style"
import { faPeopleGroup, faClockFour, faGaugeHigh, faWind, faPen, faArrowsLeftRight, faExclamationTriangle, faPerson, faFlagCheckered, faDoorOpen, faSkull, faCheck, faPlane, faEarthEurope, faParachuteBox } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const AppContext = useContext(AppGlobalContext)
    console.log(AppContext)

    const groundSpeedDuringDrop = AppContext.getProperties.planeAirSpeedUponExit - AppContext.getProperties.frontWindVectorUponExit;
    const horizontalSeparationDistance = groundSpeedDuringDrop * AppContext.getProperties.timeBetweenDrops;
    const TotalRunDistance = horizontalSeparationDistance * AppContext.getProperties.dropsByRun
    const horizontalSeparationDistanceIsTooShort = horizontalSeparationDistance < 250;
    const horizontalSeparationDistanceIsFreakingDangerous = horizontalSeparationDistance <= 200;
    const horizontalRunDistanceIsLong = TotalRunDistance > 2000;

    return <S.HeaderContainer>
        <S.StyledLogo icon={faParachuteBox} />
        <S.InputsContainer>

            <InputWithLabel min={1} max={20} unit="" icon={faPeopleGroup} label="Nombre de départs" value={AppContext.getProperties.dropsByRun} onChange={AppContext.setProperties.setDropsByRun} />
            <InputWithLabel min={0} max={50} unit="Secs" icon={faClockFour} label="Temps entre les départs" value={AppContext.getProperties.timeBetweenDrops} onChange={AppContext.setProperties.setTimeBetweenDrops} />
            <InputWithLabel min={0} max={50} unit="m/s" icon={faGaugeHigh} label="Vitesse Air de l'avions" value={AppContext.getProperties.planeAirSpeedUponExit} onChange={AppContext.setProperties.setPlaneAirSpeedUponExit} />
            <InputWithLabel min={0} max={50} unit="m/s" icon={faWind} label="Vitesse du vent au larguage" value={AppContext.getProperties.frontWindVectorUponExit} onChange={AppContext.setProperties.setFrontWindVectorUponExit} />

        </S.InputsContainer>
        <S.ComputedDataContainer>
            <S.StyledKeyInfoContainer>
                <S.StyledKeyInfoIcon icon={faPlane} />
                <S.StyledKeyInfoIcon icon={faGaugeHigh} />
                <S.StyledKeyInfoIcon icon={faEarthEurope} />
                <div style={{ display: "flex", flexWrap: "wrap", width: "70%", alignItems: "center" }}>
                    <S.StyledKeyInfoLabel>{`Vitesse sol de l'avion: `}</S.StyledKeyInfoLabel>
                    <S.StyledKeyInfoValue>{`${groundSpeedDuringDrop} m/s`}</S.StyledKeyInfoValue>
                </div>
            </S.StyledKeyInfoContainer>
            <S.StyledKeyInfoContainer>
                <S.StyledKeyInfoIcon icon={faPerson} />
                <S.StyledKeyInfoIcon icon={faArrowsLeftRight} />
                <S.StyledKeyInfoIcon icon={faPerson} />
                <div style={{ display: "flex", flexWrap: "wrap", width: "70%", alignItems: "center" }}>
                    <S.StyledKeyInfoLabel>{`Distance entre 2 départs:`}</S.StyledKeyInfoLabel>
                    {horizontalSeparationDistanceIsTooShort ?
                        <S.StyledKeyInfoValue style={{ color: "red" }}>{` ${horizontalSeparationDistance}  mètres`}</S.StyledKeyInfoValue> :
                        <S.StyledKeyInfoValue >{` ${horizontalSeparationDistance} mètres`}</S.StyledKeyInfoValue>
                    }
                </div>
                {horizontalSeparationDistanceIsTooShort && !horizontalSeparationDistanceIsFreakingDangerous &&
                    < S.StyledAlertIcon icon={faExclamationTriangle} />
                }
                {horizontalSeparationDistanceIsFreakingDangerous &&
                    <S.StyledAlertIcon icon={faSkull} />
                }
                {!horizontalSeparationDistanceIsTooShort &&
                    <S.StyledOkIcon icon={faCheck} />
                }

            </S.StyledKeyInfoContainer>
            <S.StyledKeyInfoContainer>

                <S.StyledKeyInfoIcon icon={faDoorOpen} />
                <S.StyledKeyInfoIcon icon={faArrowsLeftRight} />
                <S.StyledKeyInfoIcon icon={faFlagCheckered} />
                <div style={{ display: "flex", flexWrap: "wrap", width: "70%", alignItems: "center" }}>
                    <S.StyledKeyInfoLabel>{`Distance sol parcourue sur axe:`}</S.StyledKeyInfoLabel>
                    <S.StyledKeyInfoValue>{`${TotalRunDistance} mètres`}</S.StyledKeyInfoValue>
                </div>
                {horizontalRunDistanceIsLong &&
                    <S.StyledAlertIcon icon={faExclamationTriangle} />
                }
            </S.StyledKeyInfoContainer>
        </S.ComputedDataContainer>
    </S.HeaderContainer >

}

export default Header;



