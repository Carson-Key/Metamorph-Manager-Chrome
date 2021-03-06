export const STATLIST = {
    strength: 0,
    agility: 0,
    fighting: 0,
    awareness: 0,
    stamina: 0,
    dexterity: 0,
    intellect: 0,
    presence: 0,
    dodge: 0,
    parry: 0,
    fortitude: 0,
    toughness: 0,
    will: 0,
    acrobatics: 0,
    athletics: 0,
    deception: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    perception: 0,
    persuasion: 0,
    sleightOfHand: 0,
    stealth: 0,
    technology: 0,
    treatment: 0,
    vehicles: 0
}
export const STATHTMLNAMES = {
    strength: "attr_strength-misc",
    agility: "attr_agility-misc",
    fighting:"attr_fighting-misc",
    awareness: "attr_awareness-misc",
    stamina: "attr_stamina-misc",
    dexterity: "attr_dexterity-misc",
    intellect: "attr_intellect-misc",
    presence: "attr_presence-misc",
    dodge: "attr_dodge-misc",
    parry: "attr_parry-misc",
    fortitude: "attr_fortitude-misc",
    toughness: "attr_toughness-misc",
    will: "attr_will-misc",
    acrobatics: "attr_Acrobatics-other",
    athletics: "attr_Athletics-other",
    deception: "attr_Deception-other",
    insight: "attr_Insight-other",
    intimidation: "attr_Intimidation-other",
    investigation: "attr_Investigation-other",
    perception: "attr_Perception-other",
    persuasion: "attr_Persuasion-other",
    sleightOfHand: "attr_Sleight-of-hand-other",
    stealth: "attr_Stealth-other",
    technology: "attr_Technology-other",
    treatment: "attr_Treatment-other",
    vehicles: "attr_Vehicles-other"
}
export const HTMLPARSINGVALUES = {
    getMorphData: {
        splitDesc: "\n",
        morphName: {
            value: " ",
            index: 2
        },
        statBoostsFilter: 'Increased',
    },
    getStatIncreaseData: {
        split: " ",
        nameIndex: 2,
        valueIndex: 3
    },
    decideIfMetaMorph: {
        logMsg: "This character does not have any metamorph",
        returnValue: {}
    },
    getMetaMorph: "span:contains('metamorph')",
    changeCharacterSheet: {
        characterSheetQuery: "a[data-tab='charsheet']",
        scrollingElement: "#dialog-window"
    },
    changeStat: {
        statQuery: (statName) => {
            return "input[name*='" + statName + "']"
        }
    }
}