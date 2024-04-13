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
            filename = "homepage.html";
        
        location.href = "m." + filename;
    }
}

function goToInstagram() {
    window.open("https://www.instagram.com/theriskadvisor_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==");
}

function goToLinkedin() {
    window.open("https://it.linkedin.com/in/");
}

function goToYoutube() {
    window.open("https://www.youtube.com/@theriskadvisor_");
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');

    for(var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

function checkAndCreateCookie(cookieName, expireTime) {
    var existingCookie = getCookie(cookieName);

    if (existingCookie === "") {
        
        var currentDate = new Date();
        var expireDate = new Date(currentDate.getTime() + expireTime * 1000 * 60); 

         document.cookie = cookieName + "=valid;expires=" + expireDate.toUTCString() + ";path=/";
        console.log("Cookie creato con successo!");
        return true;
    } else {
        console.log("Il cookie esiste già.");
        return false;
    }
}

function showCookieBanner() {
    var created = checkAndCreateCookie("banner", 30);

    if(created) {
        document.getElementById("cookie-banner").style.bottom = "0%";
    }
}

function hideCookieBanner() {
    document.getElementById("cookie-banner").style.bottom = "-20%";
}
