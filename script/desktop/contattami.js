function showWorkForm() {
    document.getElementById("form-work-with-me").style.display = "flex";
    document.getElementById("form-contact-me").style.display = "none";

    document.getElementById("form-selector-contact-me").className = "form-selector-secondary";
    document.getElementById("form-selector-work-with-me").className = "form-selector-primary";
}

function showContactForm() {
    document.getElementById("form-work-with-me").style.display = "none";
    document.getElementById("form-contact-me").style.display = "flex";

    document.getElementById("form-selector-contact-me").className = "form-selector-primary";
    document.getElementById("form-selector-work-with-me").className = "form-selector-secondary";
}

function disableContactSubmit() {
    document.getElementById("submit-contact-me").style.pointerEvents = "none";
    document.getElementById("submit-contact-me").disabled = true;
    document.getElementById("submit-contact-me").style.opacity = 0.3;
}

function disableWorkSubmit() {
    document.getElementById("submit-work-with-me").style.pointerEvents = "none";
    document.getElementById("submit-work-with-me").disabled = true;
    document.getElementById("submit-work-with-me").style.opacity = 0.3;
}

function triggerContactSubmit() {
    if(document.getElementById("privacy-contact-me").checked) {
        document.getElementById("submit-contact-me").style.pointerEvents = "all";
        document.getElementById("submit-contact-me").disabled = false;
        document.getElementById("submit-contact-me").style.opacity = 1;
    } else 
        disableContactSubmit();
}

function triggerWorkSubmit() {
    if(document.getElementById("privacy-work-with-me").checked) {
        document.getElementById("submit-work-with-me").style.pointerEvents = "all";
        document.getElementById("submit-work-with-me").disabled = false;
        document.getElementById("submit-work-with-me").style.opacity = 1;
    } else 
        disableWorkSubmit();
}

