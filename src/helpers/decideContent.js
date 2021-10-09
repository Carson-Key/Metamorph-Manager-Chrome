let breakContentLoop = 0;

const testRunContent = (url, content) => {
    if (content.regex.test(url) && breakContentLoop !== 1) {
        content.function();
        breakContentLoop = 1;
    }
}
const notSupportedURL = () => {
    if (breakContentLoop === 0) {
        console.log("This is not a supported page");
    }
}

export const decideContent = (url, contentList) => {
    contentList.forEach((content) => {
        testRunContent(url, content);
    });
    notSupportedURL();
}