function generateFakeData() {
    // Need to implement fake data generation here
    return "This is fake data"
}

function fillInputFields() {
    // In your content script
    // change to only select input fields which are not disabled
    const inputElements = document.querySelectorAll('input')
    console.log("Input fields are =>");
    console.log(inputElements);
    console.log("Displaying each fields");
    inputElements.forEach((input) => {
        console.log(input);
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