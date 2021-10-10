import { 
    getMorphPowers, 
    parseMetaMorph, 
    decideIfMetaMorph, 
    checkIfCompatibleCharacter,
    createDividerButton,
    createMetaMorphButton
} from '../helpers/roll20Popout.js'
import { waitForMutation } from '../helpers/basic.js'

const generateMetaMorphData = () => {
    const morphPowersArray = getMorphPowers()
    return decideIfMetaMorph(morphPowersArray, parseMetaMorph)
}
const main = () => {
    const metaMorphData = generateMetaMorphData()

    if (checkIfCompatibleCharacter(metaMorphData)) {
        let tabMenu = createDividerButton()
    
        const metaMorphDataArray = Object.keys(metaMorphData);
        metaMorphDataArray.forEach((metaMorph) => {
            createMetaMorphButton(metaMorphData, metaMorph, tabMenu)
        })
    }
}

export const roll20Popout = () => {
    waitForMutation(document, main)
};