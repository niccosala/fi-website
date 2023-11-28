function openMenu() {
    document.getElementById("menu-button").style.opacity = 0;
    document.getElementById("dark-panel").style.left = "0px";
    document.getElementById("menu").style.left = "0px";
}

function closeMenu() {
    document.getElementById("menu-button").style.opacity = 1;
    document.getElementById("dark-panel").style.left = "100%";
    document.getElementById("menu").style.left = "-130%";
}

function showLoading() {
    document.getElementById("form-loading").style.bottom = "2%";
}

function checkIfMobile() {
    // /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); -> Considera anche iPad
    const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        var url = window.location.pathname;
        var filename = url.substring(url.lastIndexOf('/')+1);

        if(filename == "")
            filename = "index.html";
        
        location.href = "m." + filename;
    }
}