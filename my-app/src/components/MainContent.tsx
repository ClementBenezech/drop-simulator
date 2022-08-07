import { useContext } from "react"
import { AppGlobalContext } from "../App"
import styled from "styled-components"
import { faker } from '@faker-js/faker';
import { SkydiverParameters } from "../utils/getSkydiverData";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { getSkydiverData } from "../utils/getSkydiverData";

ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




export type Dataset = {
    label: string;
    data: { x: number, y: number }[];
    /*borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',*/
    showLine: boolean;
}


export const MainContentContainer = styled.div`
  width: 100vw;
  height: 70vh;
  position:relative;
  overflow: hidden;
  background: white;
  
`


export const MainContent = () => {
    const AppContext = useContext(AppGlobalContext)

    const generateSkydiversDataSet = (horizontalSeparationDistance: number) => {
        const datasets: Dataset[] = [];
        AppContext.getProperties.skydiversParameters.forEach((skydiver, index) => {
            const horizontalStartingPoint = index * horizontalSeparationDistance;
            const skydiverId = index + 1;
            datasets.push(
                {
                    label: `Skydiver ${skydiverId}`,
                    data: getSkydiverData({ horizontalStartingPoint: horizontalStartingPoint, verticalSpeed: skydiver.verticalSpeed, windSpeed: AppContext.getProperties.frontWindVectorUponExit }),
                    showLine: true,
                }
            )
            console.log(datasets)
        })
        return { datasets: datasets }
    }




    const groundSpeedDuringDrop = AppContext.getProperties.planeAirSpeedUponExit - AppContext.getProperties.frontWindVectorUponExit;
    const horizontalSeparationDistance = groundSpeedDuringDrop * AppContext.getProperties.timeBetweenDrops;
    const TotalRunDistance = horizontalSeparationDistance * AppContext.getProperties.dropsByRun

    const skydiversDatasets = generateSkydiversDataSet(horizontalSeparationDistance);

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
                min: (-AppContext.getProperties.frontWindVectorUponExit * 60) - 100,

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


    console.log(skydiversDatasets)

    return (
        < MainContentContainer  >
            <Scatter options={options} data={skydiversDatasets} />;
        </MainContentContainer >
    )

}

export default MainContent;