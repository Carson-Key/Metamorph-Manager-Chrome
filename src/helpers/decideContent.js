let breakContentLoop = 0;

const testRunContent = (url, content) => {
    if (content.regex.test(url) && breakContentLoop !== 1) {
        content.function();
        breakContentLoop = 1;
    }
}

export const decideContent = (url, contentList) => {
    contentList.forEach((content) => {
        testRunContent(url, content);
    });
}