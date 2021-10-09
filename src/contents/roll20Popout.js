import { getMorphPowers, parseMetaMorph, decideIfMetaMorph } from '../helpers/roll20Popout.js'

export const roll20Popout = () => {
    setTimeout(() => {
        const morphPowersArray = getMorphPowers()
        const metaMorph = decideIfMetaMorph(morphPowersArray, parseMetaMorph)
        
        console.log(metaMorph)
    }, 3000)
}