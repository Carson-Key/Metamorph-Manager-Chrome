import { getMorphPowers, getMorphData } from '../helpers/roll20Popout.js'

export const roll20Popout = () => {
    setTimeout(() => {
        let statsIncrease = {}
        const morphPowersArray = getMorphPowers()
        morphPowersArray.forEach(morph => {
            const parsedPower = getMorphData(morph)
            let metaIncrease = {}
            parsedPower.stats.forEach((statLine) => {
                const statString = statLine.split(" ")
                metaIncrease[statString[2]] = parseInt(statString[3])
            })
            statsIncrease[parsedPower.name] = metaIncrease
        });
        console.log(statsIncrease)
    }, 3000)
}