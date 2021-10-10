import { getMorphPowers, parseMetaMorph, decideIfMetaMorph } from '../helpers/roll20Popout.js'
import { waitForMutation } from '../helpers/basic.js'

const generateMetaMorphData = () => {
    const morphPowersArray = getMorphPowers()
    return decideIfMetaMorph(morphPowersArray, parseMetaMorph)
}
const createMorphMenu = () => {
    const metaMorph = generateMetaMorphData()
    console.log(metaMorph)
}

export const roll20Popout = () => {
    waitForMutation(document, createMorphMenu)
};