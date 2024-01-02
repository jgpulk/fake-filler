// Execute the content script when the extension button is clicked
chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("@background.js");
    chrome.tabs.sendMessage(tab.id, { action: "fillInputs" });
})