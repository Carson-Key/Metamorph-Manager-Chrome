import { convertHTMLCollectionToArray } from './basic.js'

const getMorphData = (morph) => {
    const splitDesc = morph.innerHTML.split("\n")
    const morphName = splitDesc[0].split(" ")[2]
    const statBoosts = splitDesc.filter(line => line.includes('Increased'))

    return {
        name: morphName,
        stats: statBoosts
    }
}
const getStatIncreaseData = (statIncreaseLine, statIncreaseData) => {
    const statIncreaseArray = statIncreaseLine.split(" ")
    statIncreaseData[statIncreaseArray[2]] = parseInt(statIncreaseArray[3])
}

export const getMorphPowers = () => {
    return convertHTMLCollectionToArray($("span:contains('Metamorph')"))
}

export const parseMetaMorph = (morphPowersArray) => {
    let metaMorph = {}
    morphPowersArray.forEach(morph => {
        const morphData = getMorphData(morph)
        let statIncreaseData = {}
        morphData.stats.forEach((statIncreaseLine) => {
            getStatIncreaseData(statIncreaseLine, statIncreaseData)
        })
        metaMorph[morphData.name] = statIncreaseData
    });
    return metaMorph;
}