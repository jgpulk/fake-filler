function generateFakeData() {
    // Need to implement fake data generation here
    return "This is fake data"
}

function fillInputFields() {
    const inputElements = document.querySelectorAll('input')
    console.log("Input fields are");
    console.log(inputElements);
    inputElements.forEach((input) => {
        input.value = generateFakeData()
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("@content - addListener");
    if (request.action === 'fillInputs') {
        fillInputFields()
    }
})