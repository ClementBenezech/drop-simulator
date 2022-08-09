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
import { wrap } from "module";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { devices } from "../utils/sizes";

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
    icon: IconDefinition;
    iconRotation: string;
}


export const MainContentContainer = styled.div`
width: 100%;
height: 68vh;
position:relative;
overflow: hidden;
background: white;
box-sizing: border-box;
border-radius: 6px;
@media ${devices.mobile} {
    margin-bottom: 140px;
}
 
`

export const SkydiverLegendLabel = styled.div`
display: block;
font-size: 15px;
@media ${devices.mobile} {
    display:none;
}
`

export const SkydiverLegend = styled.div`
        width: 9%;
        height: 25px;
        box-sizing: border-box;
        border-radius: 6px;
        box-shadow: 2px 2px 4px grey;
        margin-top: 0px;
        margin: 4px;
        border-radius: 4px;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        @media ${devices.mobile} {
            width: min-content;
            padding: 4px;
        }
`


export const MainContent = () => {
    const AppContext = useContext(AppGlobalContext)

    const generateSkydiversDataSet = (horizontalSeparationDistance: number) => {
        const datasets: Dataset[] = [];
        AppContext.getProperties.skydiversParameters.forEach((skydiver, index) => {
            const horizontalStartingPoint = index * horizontalSeparationDistance;
            const skydiverId = index + 1;
            const color: string[] = ['#023caf', '#DD482D', '#c9940c', '#00de81', '#0F6988', "#00ADBE", 'orange', 'brown', 'grey', "purple"]
            datasets.push(
                {
                    label: `${skydiver.name}`,
                    data: getSkydiverData({ horizontalStartingPoint: horizontalStartingPoint, verticalSpeed: skydiver.verticalSpeed, windSpeed: AppContext.getProperties.frontWindVectorUponExit }),
                    borderColor: color[index],
                    backgroundColor: color[index],
                    showLine: true,
                    icon: skydiver.icon,
                    iconRotation: skydiver.iconRotation,
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
                display: false,
                labels: {
                    usePointStyle: true,
                    align: "center",
                    color: "grey",
                    backgroundColor: "red",
                    borderColor: "blue",
                    boxWidth: 200,
                    padding: 10,
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

    const LegendElements = skydiversDatasets.datasets.map((skydiver, index) => {
        return <SkydiverLegend style={{
            color: skydiver.backgroundColor, border: `2px solid ${skydiver.backgroundColor}`
        }}>
            <span>{`#${index + 1}`}</span>
            <SkydiverLegendLabel>{skydiver.label}</SkydiverLegendLabel>
            <FontAwesomeIcon style={{ transform: `rotate(${skydiver.iconRotation})`, margin: "8px" }} icon={skydiver.icon} /></SkydiverLegend >
    })

    return (
        <>
            <div style={{ display: "flex", margin: "8px 0", flexWrap: "wrap", width: "93vw", justifyContent: "space-evenly" }}>{LegendElements}</div>
            < MainContentContainer  >
                <Scatter options={options} data={skydiversDatasets} />
            </MainContentContainer >
        </>
    )

}

export default MainContent;