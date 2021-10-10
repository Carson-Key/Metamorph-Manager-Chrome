
const MUTATIONOBSERVERCONFIG = { attributes: true, childList: true, subtree: true };

const timeoutMutationObserver = (observer, neverLoaded) => {
    setTimeout(() => {
        if (neverLoaded.happened) {
            observer.disconnect();
            console.log("The page took too long to load, timing out parser");
        }
    }, 10000)
}

export const convertHTMLCollectionToArray = (htmlCollection) => {
    return Array.from(htmlCollection);
}
export const waitForMutation = (htmlObject, functionOnMutation) => {
    let neverLoaded = {happened: true};

    const callback = (mutationsList, observer) => {
        functionOnMutation();
        observer.disconnect();
        neverLoaded.happened = false;
    };
    
    const observer = new MutationObserver(callback);
    observer.observe(htmlObject, MUTATIONOBSERVERCONFIG);

    timeoutMutationObserver(observer, neverLoaded);
}
export const overrideContainsCaseInsensitive = () => {
    jQuery.expr[':'].contains = function(a, i, m) {
        return jQuery(a).text().toLowerCase()
            .indexOf(m[3].toLowerCase()) >= 0;
    };
}