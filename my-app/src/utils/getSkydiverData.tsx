export type SkydiverParameters = {
    verticalSpeed: number;
    horizontalStartingPoint: number
    windSpeed: number;
}

export const getSkydiverData = ({ horizontalStartingPoint, verticalSpeed, windSpeed }: SkydiverParameters) => {

    const skydiverDataset = [];
    let currentHorizontalDistance = horizontalStartingPoint

    for (let freefallDistance = 0; freefallDistance < 3000;) {
        const currentHeight = 4000 - freefallDistance;
        skydiverDataset.push({ x: currentHorizontalDistance, y: currentHeight })
        freefallDistance += 10 * verticalSpeed;
        currentHorizontalDistance += -10 * windSpeed;
    }

    return skydiverDataset;
}