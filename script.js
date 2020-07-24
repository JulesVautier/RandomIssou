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

const sticker = "https://image.noelshack.com/fichiers/2018/27/4/1530827992-jesusreup.png"

function parseText(lines) {
    for(var i = 0; i < lines.length; i++) {
        if (lines[i].length > 0 && !lines[i].match(emptyLine)) {
            console.log('b__' + lines[i] + "_")
            lines[i] = lines[i].concat(' ', sticker)
            console.log('a__' + lines[i] + "_")

        }
    }
    console.log(lines)
    return lines.join('\n')
}

function readtext() {
    var textArea = $("[name='message_topic']");
    var text = textArea.val()
    text = parseText(text.split('\n'))
    textArea.val(text)
}

var textArea = $("[name='message_topic']");
textArea.val("je suis en\n      \nvacances\n");
//setInterval(readtext, 1000);
readtext()
