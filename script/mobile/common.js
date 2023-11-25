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