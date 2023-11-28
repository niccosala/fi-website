function openMenu() {
    document.getElementById("menu-button").style.opacity = 0;
    document.getElementById("dark-panel").style.bottom = "0px";
    document.getElementById("menu").style.bottom = "0px";
}

function closeMenu() {
    document.getElementById("menu-button").style.opacity = 1;
    document.getElementById("dark-panel").style.bottom = "100%";
    document.getElementById("menu").style.bottom = "-100%";
}

function showLoading() {
    document.getElementById("form-loading").style.bottom = "2%";
}

function checkIfDesktop() {
    const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) {
        var url = window.location.pathname;
        url = url.substring(url.lastIndexOf('/')+1);
        var filename = url.substring(2)
        
        location.href = filename;
    }
}