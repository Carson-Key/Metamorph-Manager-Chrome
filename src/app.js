import { decideContent } from './helpers/decideContent.js';
import { roll20Popout } from './contents/roll20Popout.js';

export function app() {
    const url = document.URL;
    const contentList = [
        {
            regex: new RegExp("https://app.roll20.net/editor/character/*"),
            function: roll20Popout
        }
    ]
    
    decideContent(url, contentList);
}