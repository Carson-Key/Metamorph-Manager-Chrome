import { getMorphPowers, parseMetaMorph } from '../helpers/roll20Popout.js'

export const roll20Popout = () => {
    setTimeout(() => {
        const morphPowersArray = getMorphPowers()
        const metaMorph = parseMetaMorph(morphPowersArray)
        console.log(metaMorph)
    }, 3000)
}