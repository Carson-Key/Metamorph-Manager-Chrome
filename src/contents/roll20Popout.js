import { getMorphPowers, getMorphData } from '../helpers/roll20Popout.js'

export const roll20Popout = () => {
    setTimeout(() => {
        let statsIncrease = {}
        const morphPowersArray = getMorphPowers()
        morphPowersArray.forEach(morph => {
            const morphData = getMorphData(morph)
            let metaIncrease = {}
            morphData.stats.forEach((statLine) => {
                const statString = statLine.split(" ")
                metaIncrease[statString[2]] = parseInt(statString[3])
            })
            statsIncrease[morphData.name] = metaIncrease
        });
        console.log(statsIncrease)
    }, 3000)
}