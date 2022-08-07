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
import { Bubble, Scatter } from 'react-chartjs-2';
import { getSkydiverData } from "../utils/getSkydiverData";

var randomColor = require('randomcolor'); // import the script

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
    borderColor: string,
    backgroundColor: string,
    showLine: boolean;
}


export const MainContentContainer = styled.div`
width: 100%;

height: 70vh;
position:relative;
overflow: hidden;
background: white;
border: 1px solid lightgrey;
padding: 24px;
box-sizing: border-box;
border-radius: 6px;
 
`


export const MainContent = () => {
    const AppContext = useContext(AppGlobalContext)

    const generateSkydiversDataSet = (horizontalSeparationDistance: number) => {
        const datasets: Dataset[] = [];
        AppContext.getProperties.skydiversParameters.forEach((skydiver, index) => {
            const horizontalStartingPoint = index * horizontalSeparationDistance;
            const skydiverId = index + 1;
            const color: string[] = ['blue', 'red', 'black', 'yellow', 'pink', "green", 'orange', 'brown', 'grey', "purple"]
            datasets.push(
                {
                    label: `${skydiver.name} ${skydiverId}`,
                    data: getSkydiverData({ horizontalStartingPoint: horizontalStartingPoint, verticalSpeed: skydiver.verticalSpeed, windSpeed: AppContext.getProperties.frontWindVectorUponExit }),
                    borderColor: color[index],
                    backgroundColor: color[index],
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
                align: 'center' as const,
                backgroundColor: "red",
                labels: {
                    color: "black",
                    backgroundColor: "red",
                    borderColor: "blue",
                }
            },
            title: {
                display: false,
                background: "blue",
                position: 'bottom' as const,
                align: 'end' as const,
                text: 'Trajectoires de chute',
            },
        },
        scales: {
            x: {
                max: TotalRunDistance,
                min: (-AppContext.getProperties.frontWindVectorUponExit * 60) - 100,
                ticks: {
                    stepSize: 100,
                },
                title: {
                    display: true,
                    text: "Distance horizontale par rapport au point de larguage (en mètres)",
                    color: "#00687c",
                    align: "end" as const,
                    font: {
                        size: 14,
                        weight: "500",
                    }
                }

            },
            y: {
                max: 4000,
                min: 1000,
                ticks: {
                    stepSize: 200,
                },
                title: {
                    display: true,
                    text: "Hauteur par rapport au sol (en mètres)",
                    color: "#00687c",
                    align: "end" as const,
                    font: {
                        size: 14,
                        weight: "500",
                    }
                }
            },

        }
    }


    console.log(skydiversDatasets)

    return (
        < MainContentContainer  >
            <Scatter options={options} data={skydiversDatasets} />
        </MainContentContainer >
    )

}

export default MainContent;