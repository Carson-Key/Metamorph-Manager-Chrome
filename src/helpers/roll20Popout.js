import { convertHTMLCollectionToArray } from './basic.js'

export const getMorphPowers = () => {
    return convertHTMLCollectionToArray($("span:contains('Metamorph')"))
}