import { STATLIST, STATHTMLNAMES, HTMLPARSINGVALUES } from './roll20PopoutObjs.js'
import { convertHTMLCollectionToArray } from './basic.js'

const getMorphData = (morph) => {
    const splitDesc = morph.innerHTML.split(HTMLPARSINGVALUES.getMorphData.splitDesc)
    const morphName = splitDesc[0].split(
        HTMLPARSINGVALUES.getMorphData.morphName.value
    )[HTMLPARSINGVALUES.getMorphData.morphName.index]
    const statBoosts = splitDesc.filter(line => line.includes(
        HTMLPARSINGVALUES.getMorphData.statBoostsFilter
    ))

    return {
        name: morphName.toLowerCase(),
        stats: statBoosts
    }
}
const getStatIncreaseData = (statIncreaseLine, statIncreaseData) => {
    const statIncreaseArray = statIncreaseLine.split(HTMLPARSINGVALUES.getStatIncreaseData.split)

    statIncreaseData[
        statIncreaseArray[HTMLPARSINGVALUES.getStatIncreaseData.nameIndex
    ].toLowerCase()] = parseInt(
        statIncreaseArray[HTMLPARSINGVALUES.getStatIncreaseData.valueIndex]
    )
}
const parseStatIncrease = (morphData) => {
    let statIncreaseData = {...STATLIST}

    morphData.stats.forEach((statIncreaseLine) => {
        getStatIncreaseData(statIncreaseLine, statIncreaseData)
    })

    return statIncreaseData
}

const changeStat = (statHTMLName, statValue) => {
    $(
        HTMLPARSINGVALUES.changeStat.statQuery(statHTMLName)
    ).click();
    $(
        HTMLPARSINGVALUES.changeStat.statQuery(statHTMLName)
    ).val(statValue);
    $(
        HTMLPARSINGVALUES.changeStat.statQuery(statHTMLName)
    ).blur();
}
const ifValueNeedsChange = (statHTMLName, statValue) => {
    return (
        $(HTMLPARSINGVALUES.changeStat.statQuery(statHTMLName)).val() !== statValue
    )
}

const changeCharacterSheet = (metaMorphData) => {
    $(HTMLPARSINGVALUES.changeCharacterSheet.characterSheetQuery)[0].click()
    const metaMorphDataArray = Object.keys(metaMorphData);
    metaMorphDataArray.forEach((statName) => {
        try {
            if (ifValueNeedsChange(
                STATHTMLNAMES[statName], 
                metaMorphData[statName].toString()
            )) {
                changeStat(STATHTMLNAMES[statName], metaMorphData[statName].toString())
            }
        } catch (error) {
            console.log(error)
        }
    })
}

export const decideIfMetaMorph = (morphPowers, parse) => {
    if (morphPowers.length > 0) {
        return parse(morphPowers)
    } else {
        console.log(HTMLPARSINGVALUES.decideIfMetaMorph.logMsg)
        return HTMLPARSINGVALUES.decideIfMetaMorph.returnValue
    }
}

export const getMorphPowers = () => {
    return convertHTMLCollectionToArray($(HTMLPARSINGVALUES.getMetaMorph))
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

export const checkIfCompatibleCharacter = (metaMorphData) => {
    if (metaMorphData !== HTMLPARSINGVALUES.decideIfMetaMorph.returnValue) {
        return true
    } else {
        return false
    }
}

export const createDividerButton = () => {
    let tabMenu = document.getElementsByClassName("menu")[0];
    let button = document.createElement('button');
    button.innerHTML = "|";
    button.disabled = true;
    tabMenu.appendChild(button);

    return tabMenu
}
export const createMetaMorphButton = (metaMorphData, metaMorph, tabMenu) => {
    let button = document.createElement('button');
    button.innerHTML = metaMorph;
    button.onclick = () => {
        changeCharacterSheet(metaMorphData[metaMorph])
    }
    tabMenu.appendChild(button);
}