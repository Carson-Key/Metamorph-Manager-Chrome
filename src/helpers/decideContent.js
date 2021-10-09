export const decideContent = (url, contentList) => {
    contentList.forEach((content) => {
        if (content.regex.test(url)) {
            content.function();
        }
    });
}