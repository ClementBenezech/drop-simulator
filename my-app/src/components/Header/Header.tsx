import { useContext } from "react"
import { AppGlobalContext } from "../../App"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import * as S from "./Header.style"
import { faPeopleGroup, faClockFour, faGaugeHigh, faWind, faArrowsLeftRight, faExclamationTriangle, faFlagCheckered, faSkull, faCheck, faPlane, faParachuteBox } from '@fortawesome/free-solid-svg-icons'

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
        {/*<S.StyledLogo icon={faParachuteBox} />*/}
        <S.StyledTextLogo>EXITS</S.StyledTextLogo>
        <S.InputsContainer>

            <InputWithLabel min={1} max={10} unit="" icon={faPeopleGroup} label="Nombre de départs" value={AppContext.getProperties.dropsByRun} onChange={AppContext.setProperties.setDropsByRun} />
            <InputWithLabel min={0} max={50} unit="Secs" icon={faClockFour} label="Délai entre les départs" value={AppContext.getProperties.timeBetweenDrops} onChange={AppContext.setProperties.setTimeBetweenDrops} />
            <InputWithLabel min={30} max={60} unit="m/s" icon={faGaugeHigh} label="Vit. air de l'avion" value={AppContext.getProperties.planeAirSpeedUponExit} onChange={AppContext.setProperties.setPlaneAirSpeedUponExit} />
            <InputWithLabel min={0} max={50} unit="m/s" icon={faWind} label="Vit. Vent au larguage" value={AppContext.getProperties.frontWindVectorUponExit} onChange={AppContext.setProperties.setFrontWindVectorUponExit} />

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
        <S.ComputedDataContainer>
            {horizontalSeparationDistanceIsTooShort &&
                <S.StyledAlertMessage>La distance entre les parachutistes n'est pas suffisante. On vise un espacement de 250/300m à la sortie d'avion. Il faudrait peut être augmenter le temps entre les départs.</S.StyledAlertMessage>
            }
            {horizontalRunDistanceIsLong &&
                <S.StyledAlertMessage>La distance par rapport au sol parcourue pendant le larguage est élevée. Ce n'est pas nécéssairement un problème en fonction de la configuration de la zone de saut. On peut eventuellement diviser le largage en 2 passages.  </S.StyledAlertMessage>
            }
        </S.ComputedDataContainer>
    </S.HeaderContainer >

}

export default Header;



