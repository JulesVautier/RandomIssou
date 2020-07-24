// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.jeuxvideo.com/forums/0-51-0-1-0-1-0-blabla-18-25-ans.htm
// @grant       GM_setValue
// @grant       GM_getValue
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

const emptyLine = /^(\s+)$/
const lineFinishingByStickers = ""


function parseText(lines) {
    for(var i = 0; i < lines.length; i++) {
        var line = lines[i]
        if (line.length > 0 && !line.match(emptyLine)) {
            console.log('_' + line + "_")
        }
    }
}

function readtext() {
    var textArea = $("[name='message_topic']");
    textArea.val("je suis en\n      \nvacances\n");
    var text = textArea.val()
    parseText(text.split('\n'))
}

setInterval(readtext, 2000);
