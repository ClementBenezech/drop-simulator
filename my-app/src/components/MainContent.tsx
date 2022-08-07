import { useContext } from "react"
import { AppGlobalContext } from "../App"
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Scatter } from 'react-chartjs-2';

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




export const data = {
    datasets: [
        {
            label: 'Skydiver 1',
            data: [{ x: 0, y: 4000 }, { x: 150, y: 3400 }, { x: 300, y: 2700 }, { x: 450, y: 2000 }, { x: 600, y: 1300 }],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            showLine: true
        },
        {
            label: 'Skydiver 2',
            data: [{ x: 225, y: 4000 }, { x: 375, y: 2500 }, { x: 600, y: 1600 }, { x: 750, y: 1200 }],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            showLine: true
        },
        {
            label: 'Skydiver 3',
            data: [{ x: 375, y: 4000 }, { x: 600, y: 2500 }, { x: 750, y: 1600 }, { x: 900, y: 1200 }],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            showLine: true
        },
    ],
};


export const MainContentContainer = styled.div`
  width: 100vw;
  height: 70vh;
  position:relative;
  overflow: hidden;
  background: white;
  
`


export const MainContent = () => {
    const AppContext = useContext(AppGlobalContext)
    console.log(AppContext)
    console.log(data)

    const groundSpeedDuringDrop = AppContext.getProperties.planeAirSpeedUponExit - AppContext.getProperties.frontWindVectorUponExit;
    const horizontalSeparationDistance = groundSpeedDuringDrop * AppContext.getProperties.timeBetweenDrops;
    const TotalRunDistance = horizontalSeparationDistance * AppContext.getProperties.dropsByRun

    const options = {

        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Trajectoires de chute',
            },
        },
        scales: {
            x: {
                max: TotalRunDistance,
                min: 0,

            },
            y: {
                max: 4000,
                min: 1000,
                ticks: {
                    stepSize: 500,
                }
            },

        }
    }




    return (
        < MainContentContainer  >
            <Scatter options={options} data={data} />;
        </MainContentContainer >
    )

}

export default MainContent;