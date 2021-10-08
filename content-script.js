const url = document.URL;
const regex = new RegExp("https://app.roll20.net/editor/character/*");

if (regex.test(url)) {
    setTimeout(() => {
        let tempObj = {}
        const characterSheet = $("span:contains('Metamorph')")
        Array.from(characterSheet).forEach(element => {
            console.log(element.innerHTML)
        });
    }, 1000)
} else {
    console.log("This is not a Roll20 character popout")
}