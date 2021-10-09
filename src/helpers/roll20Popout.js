import { convertHTMLCollectionToArray } from './basic.js'

export const getMorphPowers = () => {
    return convertHTMLCollectionToArray($("span:contains('Metamorph')"))
}
export const getMorphData = (morph) => {
    const splitDesc = morph.innerHTML.split("\n")
    const morphName = splitDesc[0].split(" ")[2]
    const statBoosts = splitDesc.filter(line => line.includes('Increased'))

    return {
        name: morphName,
        stats: statBoosts
    }
}