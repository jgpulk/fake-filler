document.addEventListener('DOMContentLoaded', function() {
    const fillButton = document.getElementById('fillButton')

    fillButton.addEventListener('click', function() {
        console.log("fillButton - addEventListener");
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'fillInputs' })
        })
    })
})
  