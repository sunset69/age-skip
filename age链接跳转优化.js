// ==UserScript==
// @name         age动漫链接跳转优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  将番剧点击链接换为打开新标签页，优化点击逻辑
// @author       lostsunset
// @match        https://www.agemys.cc/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=agemys.cc
// @grant        none
// @license MIT
// ==/UserScript==

(function () {
    'use strict';

    let blocks = document.getElementsByClassName("blockcontent");
    for (let i = 0; i < blocks.length; i++) {
        const block = blocks[i];
        const links = block.getElementsByTagName("a");
        for (let j = 0; j < links.length; j++) {
            const element = links[j];
            element.setAttribute('target', '_blank')

        }
    }

})();