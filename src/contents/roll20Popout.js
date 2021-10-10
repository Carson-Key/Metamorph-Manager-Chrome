import { getMorphPowers, parseMetaMorph, decideIfMetaMorph, changeCharacterSheet } from '../helpers/roll20Popout.js'
import { waitForMutation } from '../helpers/basic.js'

const generateMetaMorphData = () => {
    const morphPowersArray = getMorphPowers()
    return decideIfMetaMorph(morphPowersArray, parseMetaMorph)
}
const createMorphMenu = () => {
    const metaMorphData = generateMetaMorphData()

    let tabMenu = document.getElementsByClassName("menu")[0];
    let button = document.createElement('button');
    button.innerHTML = "|";
    button.disabled = true;
    tabMenu.appendChild(button);

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

export const roll20Popout = () => {
    waitForMutation(document, createMorphMenu)
};