import React, { useState } from 'react';


import { Header } from './components/Header/Header';
import './App.css';
import styled from "styled-components";
import MainContent from './components/MainContent';

export type Position = {
  id: string;
  name: string;
  verticalSpeed: number;
}

export type SkydiverVerticalSpeed = {
  verticalSpeed: number;
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
    skydiversParameters: SkydiverVerticalSpeed[];
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

export const defaultGlobalContext: GlobalContext = {
  getProperties: {
    dropsByRun: 8,
    timeBetweenDrops: 8,
    planeAirSpeedUponExit: 35,
    frontWindVectorUponExit: 10,
    skydiversParameters: [
      {
        verticalSpeed: 50,
      },
      {
        verticalSpeed: 80,
      },
      {
        verticalSpeed: 50,
      },
    ],
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

`



function App() {



  const [dropsByRun, setDropsByRun] = useState<number>(8);
  const [timeBetweenDrops, setTimeBetweenDrops] = useState<number>(8);
  const [planeAirSpeedUponExit, setPlaneAirSpeedUponExit] = useState<number>(35);
  const [frontWindVectorUponExit, setFrontWindVectorUponExit] = useState<number>(10);
  const [skydiversParameters, setSkydiversParameters] = useState<SkydiverVerticalSpeed[]>([
    {
      verticalSpeed: 50,
    },
    {
      verticalSpeed: 70,
    },
    {
      verticalSpeed: 50,
    },
  ]);
  const [windGradientCollection, setWindGradientCollection] = useState<WindGradient[]>([{
    speed: 15, /* In m/s */
    startingAt: 4000,
    endingAt: 1000,
  }]);

  console.log("Skydiver Data should be here")

  return (
    <AppContainer className="App">
      <AppGlobalContext.Provider value={{ getProperties: { dropsByRun, timeBetweenDrops, skydiversParameters, windGradientCollection, planeAirSpeedUponExit, frontWindVectorUponExit }, setProperties: { setDropsByRun, setTimeBetweenDrops, setSkydiversParameters, setWindGradientCollection, setPlaneAirSpeedUponExit, setFrontWindVectorUponExit } }}>
        <Header />
        <MainContent />
      </AppGlobalContext.Provider>
    </AppContainer>
  );
}

export default App;
