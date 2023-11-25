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