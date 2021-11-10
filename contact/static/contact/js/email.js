// --- Sends e-mail to my e-mail adress
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.send("service_iwftkus", "fancydaydesign", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contactform_request": contactForm.projectsummary.value
    })
        .then(
            function success() {
                notification();
                setTimeout(refresh, 2500);
            },
            function failure() {
                failToSend();
            }
        );
    return false;
});

// --- Changes text in button to notify user that e-mail was sent successfuly (200) ---
function notification() {
    $("#submit").text("Request Submitted!");
}

// --- Refreshes form ONLY ---
function refresh() {
    $("#submit").text("Submit");
    document.getElementById("contactForm").reset();
}

// --- E-mail failed to sent (404) ---
function failToSend(){
    $("#submit").text("Failed to submit. Try again");
}
