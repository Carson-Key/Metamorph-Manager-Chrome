import { convertHTMLCollectionToArray } from './basic.js'

const getMorphData = (morph) => {
    const splitDesc = morph.innerHTML.split("\n")
    const morphName = splitDesc[0].split(" ")[2]
    const statBoosts = splitDesc.filter(line => line.includes('Increased'))

    return {
        name: morphName.toLowerCase(),
        stats: statBoosts
    }
}
const getStatIncreaseData = (statIncreaseLine, statIncreaseData) => {
    const statIncreaseArray = statIncreaseLine.split(" ")

    statIncreaseData[statIncreaseArray[2].toLowerCase()] = parseInt(statIncreaseArray[3])
}
const parseStatIncrease = (morphData) => {
    let statIncreaseData = {}

    morphData.stats.forEach((statIncreaseLine) => {
        getStatIncreaseData(statIncreaseLine, statIncreaseData)
    })

    return statIncreaseData
}

export const decideIfMetaMorph = (morphPowers, parse) => {
    if (morphPowers.length > 0) {
        return parse(morphPowers)
    } else {
        return "This character does not have any metamorph"
    }
}

export const getMorphPowers = () => {
    return convertHTMLCollectionToArray($("span:contains('Metamorph')"))
}

export const parseMetaMorph = (morphPowersArray) => {
    let metaMorph = {}

    morphPowersArray.forEach(morph => {
        const morphData = getMorphData(morph)
        const statIncreaseData = parseStatIncrease(morphData)

        metaMorph[morphData.name] = statIncreaseData
    });

    return metaMorph;
}