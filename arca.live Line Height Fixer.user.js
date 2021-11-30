// ==UserScript==
// @name         arca.live Line Height Fixer
// @namespace    happykrcheese
// @version      0.1
// @description  Fixes arca.live Line Height.
// @match         https://*.arca.live/*
// @match         https://arca.live/*
// @author       happykrcheese
// @icon         https://www.google.com/s2/favicons?domain=arca.live
// @grant        GM_addStyle
// ==/UserScript==

var height = `175`

GM_addStyle(`
    .body .board-article .article-body p {
        line-height:`+height+`%;
    }
`);

GM_addStyle(`
    .body .article-write .fr-view p {
        line-height:`+height+`%;
    }
`);