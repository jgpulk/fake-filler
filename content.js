function generateFakeName() {
    const names = ["John Doe", "Jane Doe", "Alice", "Bob"];
    return names[Math.floor(Math.random() * names.length)];
    // return faker.name.findName();
}

function generateFakeEmail() {
    const emailData = ["john@example.com", "jane@example.com", "alice@example.com"];
    return emailData[Math.floor(Math.random() * emailData.length)];
}

function fillInputFields() {
    // In your content script
    // change to only select input fields which are not disabled
    const inputElements = document.querySelectorAll( 'select')
    console.log("Input fields are =>");
    console.log(inputElements);
    console.log("Displaying each fields");
    inputElements.forEach((input) => {
        console.log(input);
        const inputType = input.type.toLowerCase();
        console.log("Input type = "+inputType);
        switch (inputType) {
            case "text":
                input.value=generateFakeName()
                break;
            case "email":
                input.value=generateFakeEmail()
                break;
            case "select-one":
                const options = input.getElementsByTagName('option');
                const randomIndex = Math.floor(Math.random() * options.length);
                options[randomIndex].selected = true;
                break;
            default:
                input.value="add dummy data"
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