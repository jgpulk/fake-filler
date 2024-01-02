function generateFakeName() {
    const names = ["John Doe", "Jane Doe", "Alice", "Bob"];
    return names[Math.floor(Math.random() * names.length)];
}

function generateFakeEmail() {
    const emailData = ["john@example.com", "jane@example.com", "alice@example.com"];
    return emailData[Math.floor(Math.random() * emailData.length)];
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
        const inputType = input.type.toLowerCase();
        switch (inputType) {
            case "name":
                input.value=generateFakeName()
                break;
            case "email":
                input.value=generateFakeEmail()
                break;
            default:
                input.value="dummy data"
                break;
        }
    });
}

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log("@content - addListener");
    if (request.action === 'fillInputs') {
        fillInputFields()
    }
})