export const roll20Popout = () => {
    setTimeout(() => {
        let statsIncrease = {}
        const characterSheet = $("span:contains('Metamorph')")
        Array.from(characterSheet).forEach(element => {
            const splitDesc = element.innerHTML.split("\n")
            const splitName = splitDesc[0].split(" ")
            const metaName = splitName[2]
            const statBoosts = splitDesc.filter(line => line.includes('Increased'))
            let metaIncrease = {}
            statBoosts.forEach((statLine) => {
                const statString = statLine.split(" ")
                metaIncrease[statString[2]] = parseInt(statString[3])
            })
            statsIncrease[metaName] = metaIncrease
        });
        console.log(statsIncrease)
    }, 3000)
}