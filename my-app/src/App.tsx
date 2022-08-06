import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import { Header } from './components/Header';
import './App.css';
import styled from "styled-components";

export type Position = {
  id: string;
  name: string;
  verticalSpeed: number;
}

export type Skydiver = {
  PositionId: string;
  Weight: number; //Probably won't use this but you never know
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
    skydiversCollection: Skydiver[];
    windGradientCollection: WindGradient[];
  },
  setProperties: {
    setDropsByRun: any;
    setTimeBetweenDrops: any;
    setSkydiversCollection: any;
    setWindGradientCollection: any;
  }

}

export const MainContent = styled.div`
  width: 100vw;
  height: 80vh;
`

export const Footer = styled.div`
  width: 100vw;
  height: 10vh;
`

export const defaultGlobalContext: GlobalContext = {
  getProperties: {
    dropsByRun: 8,
    timeBetweenDrops: 8,
    skydiversCollection: [
      {
        PositionId: "belly",
        Weight: 70, //Probably won't use this but you never know
      }
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
    setSkydiversCollection: () => { return null },
    setWindGradientCollection: () => { return null },
  }
}

export const AppGlobalContext = React.createContext<GlobalContext>(defaultGlobalContext);


function App() {

  const [dropsByRun, setDropsByRun] = useState<number>(8);
  const [timeBetweenDrops, setTimeBetweenDrops] = useState<number>(8);
  const [skydiversCollection, setSkydiversCollection] = useState<Skydiver[]>([{
    PositionId: "belly",
    Weight: 70, //Probably won't use this but you never know
  }]);
  const [windGradientCollection, setWindGradientCollection] = useState<WindGradient[]>([{
    speed: 15, /* In m/s */
    startingAt: 4000,
    endingAt: 1000,
  }]);


  return (
    <div className="App" >
      <AppGlobalContext.Provider value={{ getProperties: { dropsByRun, timeBetweenDrops, skydiversCollection, windGradientCollection }, setProperties: { setDropsByRun, setTimeBetweenDrops, setSkydiversCollection, setWindGradientCollection } }}>
        <Header />
        <MainContent></MainContent>
        <Footer></Footer>
      </AppGlobalContext.Provider>
    </div>
  );
}

export default App;