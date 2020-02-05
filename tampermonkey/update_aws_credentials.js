// ==UserScript==
// @name         aws updater
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       404pilot
// **********************************************************************************
// **********************************************************************************
// @match        {{URL}}
// **********************************************************************************
// **********************************************************************************
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function () {
  'use strict';

  let buttonClassName = "particles-button particles-button--secondary particles-button--regular particles-button generate-key-button"
  let credTabId = "__react_clipboard_3__"
  let buttonSelector = ".particles-button.particles-button--secondary.particles-button--regular.particles-button.generate-key-button"
  let credTabSelector = "#__react_clipboard_3__"

  waitForKeyElements(buttonSelector, clickButton)

  function clickButton() {
    console.log("Clicking button")

    document.getElementsByClassName(buttonClassName)[0].click()

    waitForKeyElements(credTabSelector, copyCred);
  }

  function copyCred() {
    let credTab = document.getElementById(credTabId)
    let cred = credTab.getAttribute("data-clipboard-text")

    console.log("cred: ", cred);
    console.log("Setting credentials to clipboard");

    GM_setClipboard(cred);

    // GM_openInTab("hammerspoon://update_aws", { "active": true, "setParent": true })
    GM_openInTab("hammerspoon://update_aws", true)

    // GM_xmlhttpRequest({
    //   method: 'HEAD',
    //   url: 'hammerspoon://update_aws'
    // });
  }

})();
