
welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt("What is your name?");
    if (userResponse === null || userResponse.trim() === ""){
        userResponse = "Guest";
    }
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to Farhan Website.`
}

function validateForm() : void
function validateForm() { }