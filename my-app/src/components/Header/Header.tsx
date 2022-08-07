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
            <InputWithLabel min={0} max={50} unit="m/s" icon={faGaugeHigh} label="Vitesse air de l'avion" value={AppContext.getProperties.planeAirSpeedUponExit} onChange={AppContext.setProperties.setPlaneAirSpeedUponExit} />
            <InputWithLabel min={0} max={50} unit="m/s" icon={faWind} label="Vitesse du vent au larguage" value={AppContext.getProperties.frontWindVectorUponExit} onChange={AppContext.setProperties.setFrontWindVectorUponExit} />

        </S.InputsContainer>
        <S.ComputedDataContainer>
            <S.StyledKeyInfoContainer>
                <S.StyledKeyInfoIcon icon={faPlane} />
                <S.StyledKeyValueLabelContainer>
                    <S.StyledKeyInfoLabel>{`V/sol-Avion: `}</S.StyledKeyInfoLabel>
                    <S.StyledKeyInfoValue>{`${groundSpeedDuringDrop} m/s`}</S.StyledKeyInfoValue>
                </S.StyledKeyValueLabelContainer>
            </S.StyledKeyInfoContainer>
            <S.StyledKeyInfoContainer>
                <S.StyledKeyInfoIcon icon={faArrowsLeftRight} />
                <S.StyledKeyValueLabelContainer>
                    <S.StyledKeyInfoLabel>{`Espacement:`}</S.StyledKeyInfoLabel>
                    {horizontalSeparationDistanceIsTooShort ?
                        <S.StyledKeyInfoValue style={{ color: "red" }}>{` ${horizontalSeparationDistance}  mètres`}</S.StyledKeyInfoValue> :
                        <S.StyledKeyInfoValue >{` ${horizontalSeparationDistance} mètres`}</S.StyledKeyInfoValue>
                    }
                </S.StyledKeyValueLabelContainer>
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
                <S.StyledKeyInfoIcon icon={faFlagCheckered} />
                <S.StyledKeyValueLabelContainer>
                    <S.StyledKeyInfoLabel>{`Longueur Axe:`}</S.StyledKeyInfoLabel>
                    <S.StyledKeyInfoValue>{`${TotalRunDistance} mètres`}</S.StyledKeyInfoValue>
                </S.StyledKeyValueLabelContainer>
                {horizontalRunDistanceIsLong &&
                    <S.StyledAlertIcon icon={faExclamationTriangle} />
                }
            </S.StyledKeyInfoContainer>
        </S.ComputedDataContainer>
    </S.HeaderContainer >

}

export default Header;



