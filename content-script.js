const url = document.URL;
const regex = new RegExp("https://app.roll20.net/editor/character/*");

if (regex.test(url)) {
    console.log(document.getElementsByTagName("form"))
} else {
    console.log("This is not a Roll20 character popout")
}