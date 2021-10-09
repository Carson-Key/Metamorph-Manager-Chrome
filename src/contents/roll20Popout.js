import { getMorphPowers, getMorphData, getStatIncreaseData } from '../helpers/roll20Popout.js'

export const roll20Popout = () => {
    setTimeout(() => {
        let statsIncrease = {}
        const morphPowersArray = getMorphPowers()
        morphPowersArray.forEach(morph => {
            const morphData = getMorphData(morph)
            let statIncreaseData = {}
            morphData.stats.forEach((statIncreaseLine) => {
                getStatIncreaseData(statIncreaseLine, statIncreaseData)
            })
            statsIncrease[morphData.name] = statIncreaseData
        });
        console.log(statsIncrease)
    }, 3000)
}