console.log('Initial log from popup.js');
document.addEventListener('DOMContentLoaded', function() {
    const fillButton = document.getElementById('fillButton')

    fillButton.addEventListener('click', function() {
        console.log("On popup.js -> click event catched");
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log("calling an action");
            chrome.tabs.sendMessage(tabs[0].id, { action: 'fillInputs' })
        })
    })
})