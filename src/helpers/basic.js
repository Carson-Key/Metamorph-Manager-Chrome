
const MUTATIONOBSERVERCONFIG = { attributes: true, childList: true, subtree: true };

export const convertHTMLCollectionToArray = (htmlCollection) => {
    return Array.from(htmlCollection);
}
export const waitForMutation = (htmlObject, functionOnMutation) => {
    const callback = (mutationsList, observer) => {
        functionOnMutation();
        observer.disconnect();
    };
    
    const observer = new MutationObserver(callback);
    observer.observe(htmlObject, MUTATIONOBSERVERCONFIG);

    setTimeout(() => {
        observer.disconnect();
        console.log("The page took too long to load, timing out parser")
    }, 10000)
}