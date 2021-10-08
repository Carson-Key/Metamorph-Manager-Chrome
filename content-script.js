const url = document.URL;
const regex = new RegExp("https://app.roll20.net/editor/character/*");

if (regex.test(url)) {
    console.log("Yes")
} else {
    console.log("No")
}