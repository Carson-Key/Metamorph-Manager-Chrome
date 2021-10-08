const url = document.URL;
const regex = new RegExp("https://app.roll20.net/editor/character/*");

if (regex.test(url)) {
    setTimeout(() => {
        let tempObj = {}
        const characterSheet = $("span:contains('Metamorph')")
        Array.from(characterSheet).forEach(element => {
            const splitDesc = element.innerHTML.split("\n")
            const statBoosts = splitDesc.filter(line => line.includes('Increased'))
            console.log(statBoosts)
        });
    }, 1000)
} else {
    console.log("This is not a Roll20 character popout")
}