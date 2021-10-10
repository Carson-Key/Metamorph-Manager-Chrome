import { convertHTMLCollectionToArray } from './basic.js'

const STATLIST = {
    strength: 0,
    agility: 0,
    fighting: 0,
    awareness: 0,
    stamina: 0,
    dexterity: 0,
    intellect: 0,
    presence: 0,
    dodge: 0,
    parry: 0,
    fortitude: 0,
    toughness: 0,
    will: 0,
    initiave: 0,
    acrobatics: 0,
    athletics: 0,
    deception: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    perception: 0,
    persuasion: 0,
    sleightOfHand: 0,
    stealth: 0,
    technology: 0,
    treatment: 0,
    vehicles: 0
}

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
    let statIncreaseData = {...STATLIST}

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

export const changeCharacterSheet = (metaMorphData) => {
    $("a[data-tab='charsheet']")[0].click()
    const metaMorphDataArray = Object.keys(metaMorphData);
    metaMorphDataArray.forEach((statName) => {
        try {
            $("input[name*='attr_" + statName + "-misc']").click();
            $("input[name*='" + statName + "-misc']").val(metaMorphData[statName]);
            $("input[name*='" + statName + "-misc']").blur();
        } catch (error) {
            console.log(error)
        }
    })
}