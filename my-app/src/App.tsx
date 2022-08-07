import React, { useCallback, useEffect, useState } from 'react';


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
}

export type WindGradient = {
  speed: number; /* Can be positive or negative to simulate atagonists wind layers */
  startingAt: number;
  endingAt: number;
}

export type GlobalContext = {
  getProperties: {
    dropsByRun: number;
    timeBetweenDrops: number;
    planeAirSpeedUponExit: number,
    frontWindVectorUponExit: number,
    skydiversParameters: SkydiverSpeedParameters[];
    windGradientCollection: WindGradient[];
  },
  setProperties: {
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
      name: "Chute à plat",
    },

  ]


export const defaultGlobalContext: GlobalContext = {
  getProperties: {
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
  width: 100vw;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`
export type JumperType = {
  verticalSpeed: number;
  name: string;
}


function App() {

  const jumperTypes: JumperType[] = [{
    verticalSpeed: 100,
    name: "Chute Verticale",
  },
  {
    verticalSpeed: 50,
    name: "Chute à plat",
  },
  {
    verticalSpeed: 60,
    name: "Chute Dos",
  },
  ]

  const [dropsByRun, setDropsByRun] = useState<number>(6);

  const getSkydiversParameters = useCallback(() => {
    const skydiversParameters = []
    for (let nbOfSkydivers = dropsByRun; nbOfSkydivers > 0; nbOfSkydivers--) {
      skydiversParameters.push(
        jumperTypes[Math.floor(Math.random() * 3)])
    }
    console.log(skydiversParameters)
    return skydiversParameters;
  }, [dropsByRun])


  const [timeBetweenDrops, setTimeBetweenDrops] = useState<number>(8);
  const [planeAirSpeedUponExit, setPlaneAirSpeedUponExit] = useState<number>(35);
  const [frontWindVectorUponExit, setFrontWindVectorUponExit] = useState<number>(5);
  const [skydiversParameters, setSkydiversParameters] = useState<SkydiverSpeedParameters[]>(getSkydiversParameters());
  const [windGradientCollection, setWindGradientCollection] = useState<WindGradient[]>([{
    speed: 15, /* In m/s */
    startingAt: 4000,
    endingAt: 1000,
  }],);

  console.log("Skydiver Data should be here")

  useEffect(() => {
    setSkydiversParameters(getSkydiversParameters())
  }, [dropsByRun, getSkydiversParameters],)

  return (
    <AppContainer>
      <AppGlobalContext.Provider value={{ getProperties: { dropsByRun, timeBetweenDrops, skydiversParameters, windGradientCollection, planeAirSpeedUponExit, frontWindVectorUponExit }, setProperties: { setDropsByRun, setTimeBetweenDrops, setSkydiversParameters, setWindGradientCollection, setPlaneAirSpeedUponExit, setFrontWindVectorUponExit } }}>
        <Header />
        <MainContent />
      </AppGlobalContext.Provider>
    </AppContainer>
  );
}

export default App;
