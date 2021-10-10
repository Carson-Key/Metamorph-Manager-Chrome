import { 
    getMorphPowers, 
    parseMetaMorph, 
    decideIfMetaMorph, 
    changeCharacterSheet,
    checkIfCompatibleCharacter,
    createDividerButton
} from '../helpers/roll20Popout.js'
import { waitForMutation } from '../helpers/basic.js'

const generateMetaMorphData = () => {
    const morphPowersArray = getMorphPowers()
    return decideIfMetaMorph(morphPowersArray, parseMetaMorph)
}
const main = () => {
    const metaMorphData = generateMetaMorphData()

    if (checkIfCompatibleCharacter(metaMorphData)) {
        createDividerButton()
    
        const metaMorphDataArray = Object.keys(metaMorphData);
        metaMorphDataArray.forEach((metaMorph) => {
            let button = document.createElement('button');
            button.innerHTML = metaMorph;
            button.onclick = () => {
                changeCharacterSheet(metaMorphData[metaMorph])
            }
            tabMenu.appendChild(button);
        })
    }
}

export const roll20Popout = () => {
    waitForMutation(document, main)
};