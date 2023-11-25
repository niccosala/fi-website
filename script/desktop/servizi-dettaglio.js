function disableSubmit() {
    document.getElementById("submit").style.pointerEvents = "none";
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.opacity = 0.3;
}

function triggerSubmit() {
    if(document.getElementById("privacy").checked) {
        document.getElementById("submit").style.pointerEvents = "all";
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.opacity = 1;
    } else 
        disableSubmit();
}

