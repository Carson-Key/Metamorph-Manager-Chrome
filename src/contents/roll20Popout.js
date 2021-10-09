import { getMorphPowers, parseMetaMorph, decideIfMetaMorph } from '../helpers/roll20Popout.js'
import { waitForMutation } from '../helpers/basic.js'

const generateMetaMorphData = () => {
    const morphPowersArray = getMorphPowers()
    const metaMorph = decideIfMetaMorph(morphPowersArray, parseMetaMorph)

    console.log(metaMorph)
}

export const roll20Popout = () => {
    waitForMutation(document, generateMetaMorphData)
};