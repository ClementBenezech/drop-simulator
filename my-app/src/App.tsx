import React, { useCallback, useEffect, useState } from 'react';
import { faPersonPraying, faPersonFalling, faPersonWalking, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { Header } from './components/Header/Header';
import './App.css';
import styled from "styled-components";
import MainContent from './components/MainContent';
import { devices } from './utils/sizes';

export type Position = {
  id: string;
  name: string;
  verticalSpeed: number;
}

export type SkydiverSpeedParameters = {
  verticalSpeed: number;
  name: string;
  id: string;
  icon: IconDefinition;
  iconRotation: string;
}

export type WindGradient = {
  speed: number; /* Can be positive or negative to simulate atagonists wind layers */
  startingAt: number;
  endingAt: number;
}

export type GlobalContext = {
  getProperties: {
    selectedSpeedUnit: string;
    dropsByRun: number;
    timeBetweenDrops: number;
    planeAirSpeedUponExit: number,
    frontWindVectorUponExit: number,
    skydiversParameters: SkydiverSpeedParameters[];
    windGradientCollection: WindGradient[];
  },
  setProperties: {
    setSelectedSpeedUnit: any;
    setDropsByRun: any;
    setTimeBetweenDrops: any;
    setSkydiversParameters: any;
    setWindGradientCollection: any;
    setPlaneAirSpeedUponExit: any;
    setFrontWindVectorUponExit: any;
  }

}

export const defaultSkydiversParameters: SkydiverSpeedParameters[] =
  [
    {
      verticalSpeed: 50,
      name: "Plat",
      id: "belly",
      icon: faPersonFalling,
      iconRotation: "45deg",
    }
  ]


export const defaultGlobalContext: GlobalContext = {
  getProperties: {
    selectedSpeedUnit: "ms",
    dropsByRun: 6,
    timeBetweenDrops: 8,
    planeAirSpeedUponExit: 35,
    frontWindVectorUponExit: 0,
    skydiversParameters: defaultSkydiversParameters,
    windGradientCollection: [
      {
        speed: 15, /* In m/s */
        startingAt: 4000,
        endingAt: 1000,
      }],
  },
  setProperties: {
    setSelectedSpeedUnit: () => { return null },
    setDropsByRun: () => { return null },
    setTimeBetweenDrops: () => { return null },
    setSkydiversParameters: () => { return null },
    setWindGradientCollection: () => { return null },
    setPlaneAirSpeedUponExit: () => { return null },
    setFrontWindVectorUponExit: () => { return null },
  }
}

export const AppGlobalContext = React.createContext<GlobalContext>(defaultGlobalContext);



export const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  width: 100%;
  @media ${devices.mobile} {
    flex-direction: column;
    padding: 0;
  }
`
export type JumperType = {
  verticalSpeed: number;
  name: string;
  id: string;
  icon: IconDefinition;
  iconRotation: string;
}

//Creating the speed unit type.
export type SpeedUnit = {
  id: string;
  abbreviation: string;
  longName: string;
  multiplier: number;
}

//Creating a collection of speedUnits using the above type
export const speedUnits: SpeedUnit[] = [
  {
    id: "ms",
    abbreviation: "m/s",
    longName: "Mètres par seconde",
    multiplier: 1,
  },
  {
    id: "kts",
    abbreviation: "Kts",
    longName: "Noeuds",
    multiplier: 1.94,
  },
  {
    id: "kmh",
    abbreviation: "Km/h",
    longName: "Kilomètres par heure",
    multiplier: 3.6,
  },


]
//End of speed unit modification


function App() {

  const jumperTypes: JumperType[] = [{
    verticalSpeed: 100,
    name: "Vertical",
    id: "vertical",
    icon: faPersonWalking,
    iconRotation: "180deg",
  },
  {
    verticalSpeed: 50,
    name: "Plat",
    id: "belly",
    icon: faPersonFalling,
    iconRotation: "110deg",
  },
  {
    verticalSpeed: 60,
    name: "Dos",
    id: "back",
    icon: faPersonPraying,
    iconRotation: "-110deg",
  },
  ]



  const [dropsByRun, setDropsByRun] = useState<number>(6);

  const getSkydiversParameters = useCallback(() => {
    const skydiversParameters = []
    for (let nbOfSkydivers = dropsByRun; nbOfSkydivers > 0; nbOfSkydivers--) {
      skydiversParameters.push(
        jumperTypes[Math.floor(Math.random() * 3)])
    }
    return skydiversParameters;
  }, [dropsByRun])


  // We are creating a state which will contain the current Selected speedunit for the app, initialized to m/s
  const [selectedSpeedUnit, setSelectedSpeedUnit] = useState<string>('ms')

  const [timeBetweenDrops, setTimeBetweenDrops] = useState<number>(8);
  const [planeAirSpeedUponExit, setPlaneAirSpeedUponExit] = useState<number>(35);
  const [frontWindVectorUponExit, setFrontWindVectorUponExit] = useState<number>(5);
  const [skydiversParameters, setSkydiversParameters] = useState<SkydiverSpeedParameters[]>(getSkydiversParameters());
  const [windGradientCollection, setWindGradientCollection] = useState<WindGradient[]>([{
    speed: 15, /* In m/s */
    startingAt: 4000,
    endingAt: 1000,
  }],);


  useEffect(() => {
    setSkydiversParameters(getSkydiversParameters())
  }, [dropsByRun, getSkydiversParameters],)

  return (
    <AppContainer>
      <AppGlobalContext.Provider value={{ getProperties: { selectedSpeedUnit, dropsByRun, timeBetweenDrops, skydiversParameters, windGradientCollection, planeAirSpeedUponExit, frontWindVectorUponExit }, setProperties: { setSelectedSpeedUnit, setDropsByRun, setTimeBetweenDrops, setSkydiversParameters, setWindGradientCollection, setPlaneAirSpeedUponExit, setFrontWindVectorUponExit } }}>
        <Header />
        <MainContent />
      </AppGlobalContext.Provider>
    </AppContainer>
  );
}

export default App;
